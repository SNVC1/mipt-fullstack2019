from django.shortcuts import render
from rest_framework import viewsets, mixins
from .serializers import ProfileSerializer
from .models import Profile


class ProfileCreateSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
