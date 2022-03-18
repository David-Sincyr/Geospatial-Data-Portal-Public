from django.test import TestCase

from users.models import Users

# Create your tests here.
class UsersModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up static objects used by all test methods
        Users.objects.create(
            name="John Smith", password="1234567", email="john.smith@example.com"
        )

    # def setUp(self):
    #     # Setup run before every test method.
    #     pass

    # def tearDown(self):
    #     # Clean up run after every test method.
    #     pass

    def test_users_object_str(self):
        user = Users.objects.get(id=1)
        expected_str = user.name + "," + user.email
        self.assertEqual(str(user), expected_str)
