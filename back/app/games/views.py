from .models import Game
from rest_framework import viewsets, mixins
from .serializers import GameSerializer
from django.utils.timezone import now


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class GameUpcomingViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def get_queryset(self):
        queryset = super(GameUpcomingViewSet, self).get_queryset()
        return queryset.filter(start_date__gt=now())


class GameFinishedViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def get_queryset(self):
        queryset = super(GameFinishedViewSet, self).get_queryset()
        return queryset.filter(start_date__lte=now())