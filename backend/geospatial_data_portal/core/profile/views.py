from rest_framework import status
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from core.profile.models import UserProfile


class UserProfileView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    '''
        Attempts to retrieve a user profile, its first and last name.
        It requires an access token to be able to retrieve data
    '''
    def get(self, request):
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            status_code = status.HTTP_200_OK
            response = {
                'success': 'true',
                'status code': status_code,
                'message': 'User profile fetched successfully',
                'data': [{
                    'first_name': user_profile.first_name,
                    'last_name': user_profile.last_name,
                    }]
                }

        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            response = {
                'success': 'false',
                'status code': status.HTTP_400_BAD_REQUEST,
                'message': 'User does not exists',
                'error': str(e)
                }

        return Response(response, status=status_code)