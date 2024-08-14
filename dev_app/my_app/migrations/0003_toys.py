# Generated by Django 5.0.7 on 2024-08-12 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0002_profile_alter_users_email_alter_users_password'),
    ]

    operations = [
        migrations.CreateModel(
            name='Toys',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('toy_name', models.CharField(max_length=98)),
                ('toy_image', models.ImageField(blank=True, null=True, upload_to='toys_photos/')),
                ('toy_price', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]