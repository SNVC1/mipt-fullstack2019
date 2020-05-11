from rest_framework import serializers
from .models import Bet
from games.serializers import GameSerializer


class BetSerializer(serializers.ModelSerializer):
    game = GameSerializer(read_only=True)

    class Meta:
        model = Bet
        fields = ('id', 'game', 'player', 'creation_date', 'type', 'status', 'sum', 'cf')


class BetCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bet
        fields = ('id', 'game', 'player', 'creation_date', 'type', 'status', 'sum', 'cf')
        read_only_fields = ('player', 'status', 'creation_date')


class BetUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bet
        fields = ('id', 'game', 'player', 'creation_date', 'type', 'status', 'sum', 'cf')
        read_only_fields = ('id', 'game', 'player', 'creation_date', 'type', 'sum', 'cf')