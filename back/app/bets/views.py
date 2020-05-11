from rest_framework import viewsets, mixins
from .models import Bet
from .serializers import BetSerializer, BetCreateSerializer, BetUpdateSerializer


class BetViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer


class BetSelfViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer

    def get_queryset(self):
        queryset = super(BetSelfViewSet, self).get_queryset()
        return queryset.filter(player=self.request.user)


class BetCreateSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = Bet.objects.all()
    serializer_class = BetCreateSerializer

    def perform_create(self, serializer):
        serializer.save(player=self.request.user)


class BetUpdateSet(viewsets.GenericViewSet, mixins.UpdateModelMixin, mixins.ListModelMixin):
    queryset = Bet.objects.all()
    serializer_class = BetUpdateSerializer
