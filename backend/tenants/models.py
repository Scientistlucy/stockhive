from django.db import models
from django_tenants.models import TenantMixin, DomainMixin

class Client(TenantMixin):
    companyName = models.CharField(max_length=200, null=True, blank=True)
    businessType = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    county = models.CharField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=50, null=True, blank=True)
    password = models.CharField(max_length=200, null=True, blank=True)

    created_on = models.DateTimeField(auto_now_add=True)

    # auto-generate schema_name = companyName (lowercase, no spaces)
    def save(self, *args, **kwargs):
        if self.companyName:
            self.schema_name = self.companyName.lower().replace(" ", "")
        super().save(*args, **kwargs)

    def __str__(self):
        return self.companyName or "Unnamed Tenant"

class Domain(DomainMixin):
    pass
