from django.db import models


class Game(models.Model):
    start_date = models.DateTimeField()
    home_club = models.CharField(max_length=20)
    guest_club = models.CharField(max_length=20)
    home_score = models.CharField(max_length=3)
    guest_score = models.CharField(max_length=3)
    victory_cf = models.FloatField()
    draw_cf = models.FloatField()
    defeat_cf = models.FloatField()
    both_cf = models.FloatField()
    not_both = models.FloatField()

    def __str__(self):
        return self.home_club + " " + str(self.home_score) + " : " + str(self.guest_score) + " " + self.guest_club + ", "\
               + str(self.start_date)
