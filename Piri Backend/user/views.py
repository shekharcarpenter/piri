from django.shortcuts import render
from .models import User
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status


class UserAPIView(APIView):
    def post(self, request):
        """
        Creates a user based on the post request  payload.
        Parameters
            request : WSGI request
        Returns
            1. Json response containing the details about the created user
            2. If there was something wrong with the data, then errors with http 400 response code.
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
