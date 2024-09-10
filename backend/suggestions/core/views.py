from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import action

class HelloViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'], url_name='gen')
    def gen(self, request):
        return JsonResponse({'message': 'Hello, World!'})