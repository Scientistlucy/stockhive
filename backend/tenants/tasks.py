from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_welcome_email(email):
    send_mail(
        subject='Welcome to StockHive!',
        message='Thank you for registering. We are excited to have you on board!',
        from_email='from@example.com',
        recipient_list=[email],
        fail_silently=False,
    )
    print(f"Welcome email sent to {email}")
