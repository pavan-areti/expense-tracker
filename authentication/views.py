from django.shortcuts import render
from django.views import View
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
import json
from django.contrib.auth.models import User
from django.http import JsonResponse

class RegistrationView(View):
    def get(self,request):
        return render(request,'authentication/register.html')


class UserNameValidationView(View):
    def post(self, request):
        data = json.loads(request.body)
        username = data['username']
        if not str(username).isalnum():
            return JsonResponse({'username_error': 'username should only contain alphanumeric characters'}, status=400)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'username_error': 'sorry username in use,choose another one '}, status=409)
        return JsonResponse({'username_valid': True})
