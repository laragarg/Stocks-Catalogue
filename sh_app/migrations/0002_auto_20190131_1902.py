# Generated by Django 2.1.5 on 2019-01-31 19:02

from django.db import migrations


class Migration(migrations.Migration):
    atomic = False
    dependencies = [
        ('sh_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='companymodel',
            table='companymodel',
        ),
        migrations.AlterModelTable(
            name='sharesmodel',
            table='sharesmodel',
        ),
    ]
