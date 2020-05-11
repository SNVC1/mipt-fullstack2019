from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from games.models import Game

bet_types = (
    (u'1', u'victory'),
    (u'2', u'draw'),
    (u'3', u'defeat'),
    (u'4', u'both'),
    (u'5', u'not_both')
)


class Bet(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    creation_date = models.DateTimeField(default=now())
    type = models.CharField(max_length=8, choices=bet_types)
    status = models.NullBooleanField(default=None)
    sum = models.PositiveIntegerField(default=10)
    cf = models.FloatField()

    def __str__(self):
        return self.game.home_club + " - " + self.game.guest_club + " : " + self.type
