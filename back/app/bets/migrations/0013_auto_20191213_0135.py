# Generated by Django 2.2.7 on 2019-12-12 22:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bets', '0012_auto_20191213_0104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bet',
            name='creation_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]