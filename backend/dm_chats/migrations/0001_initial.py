# Generated by Django 5.0.1 on 2024-03-27 06:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('workspaces', '0007_workspaces_is_active'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TimeField(blank=True, default='', null=True)),
                ('time_stamp', models.DateTimeField(auto_now_add=True)),
                ('group_id', models.PositiveBigIntegerField()),
                ('sender_name', models.TextField(blank=True, max_length=100, null=True)),
                ('is_read', models.BooleanField(default=False)),
                ('is_send', models.BooleanField(default=False)),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_messages', to='workspaces.workspacemembers')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='send_messages', to='workspaces.workspacemembers')),
            ],
        ),
    ]
