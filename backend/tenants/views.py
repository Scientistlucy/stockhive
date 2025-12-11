from django_tenants.utils import schema_context
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Client, Domain
from .serializers import ClientSerializer , LoginSerializer
from tenants.tasks import send_welcome_email  


@api_view(['POST'])
def tenant_signup(request):
    with schema_context('public'):  
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            tenant = serializer.save() 
            Domain.objects.create(
                domain=f"{tenant.companyName.lower().replace(' ', '')}.localhost",
                tenant=tenant,
                is_primary=True
            )
             # Send welcome email asynchronously using Celery
            send_welcome_email.delay(tenant.email)
            return Response({"message": "Tenant created successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['POST'])
def tenant_login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        try:
            tenant = Client.objects.get(email=email, password=password)  # check public schema
            return Response({
                "message": "Login successful!",
                "tenant": tenant.schema_name,  # share schema_name for frontend
                "domain": f"{tenant.schema_name}.localhost"
            }, status=status.HTTP_200_OK)
        except Client.DoesNotExist:
            return Response({"error": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
