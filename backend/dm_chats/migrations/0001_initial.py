# Generated by Django 5.0.1 on 2024-04-16 04:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('workspaces', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(blank=True, default='', null=True)),
                ('time_stamp', models.DateTimeField(auto_now_add=True)),
                ('group', models.CharField(max_length=100)),
                ('is_read', models.BooleanField(default=False)),
                ('is_send', models.BooleanField(default=False)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='send_messages', to='workspaces.workspacemembers')),
            ],
        ),
    ]
