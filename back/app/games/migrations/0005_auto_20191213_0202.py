# Generated by Django 2.2.7 on 2019-12-12 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0004_auto_20191213_0135'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='start_date',
            field=models.DateTimeField(),
        ),
    ]
