# Generated by Django 2.2.7 on 2019-12-02 21:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('games', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bet',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('creation_date', models.DateField()),
                ('type', models.CharField(max_length=10)),
                ('status', models.NullBooleanField()),
                ('sum', models.IntegerField()),
                ('cf', models.FloatField()),
                ('game_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='games.Game')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
