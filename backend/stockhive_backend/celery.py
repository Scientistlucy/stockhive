import os
from celery import Celery

# Set the default Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stockhive_backend.settings")

# Create the Celery app
app = Celery("stockhive_backend")

# Load settings from Django with CELERY_ prefix
app.config_from_object("django.conf:settings", namespace="CELERY")

# Auto-discover tasks.py in all installed apps
app.autodiscover_tasks()
