from . import views
from django.urls import path

urlpatterns=[
path('register',views.RegistrationView.as_view(),name="register"),

]
