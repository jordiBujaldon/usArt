from django.contrib.auth.models import User
from django.db import models


class PublicationImage(models.Model):
    image_path = models.ImageField()

    class Meta:
        ordering = ['image_path']


class Publication(models.Model):
    title = models.CharField(max_length=100, blank=False, required=True)
    description = models.CharField(max_length=200, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.FloatField()
    images = models.ManyToManyField(PublicationImage, related_name='images')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title', 'description', 'author', 'price']
