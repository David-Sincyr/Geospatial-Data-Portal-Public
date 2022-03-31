from rest_framework import status
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from core.profile.models import UserProfile


class UserProfileView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        """
        Attempts to retrieve user profile data.
        It requires a valid access token to be able to retrieve data.
        """
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            status_code = status.HTTP_200_OK
            response = {
                "success": "true",
                "status code": status_code,
                "message": "User profile fetched successfully",
                "data": [
                    {
                        "first_name": user_profile.first_name,
                        "last_name": user_profile.last_name,
                        "username": user_profile.username,
                        "Email": user_profile.email,
                    }
                ],
            }

        # If there is no user with the specified token, then returns this message
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            response = {
                "success": "false",
                "status code": status.HTTP_400_BAD_REQUEST,
                "message": "Something went wrong",
                "error": str(e),
            }

        return Response(response, status=status_code)
