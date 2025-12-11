from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = [
            "companyName",
            "businessType",
            "address",
            "city",
            "county",
            "phone",
            "password",
             "email",
        ]
# Serializer for login
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()