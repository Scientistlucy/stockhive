from django_tenants.utils import schema_context
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Client, Domain
from .serializers import ClientSerializer

@api_view(['POST'])
def tenant_signup(request):
    with schema_context('public'):  # <-- ensures we are in public schema
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            tenant = serializer.save()  # creates tenant + schema
            Domain.objects.create(
                domain=f"{tenant.companyName.lower().replace(' ', '')}.localhost",
                tenant=tenant,
                is_primary=True
            )
            return Response({"message": "Tenant created successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
