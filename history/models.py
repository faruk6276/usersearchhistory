from django.db import models

# Create your models here.
class History(models.Model):
    keywords = models.CharField(max_length=50)
    user = models.CharField(max_length=50)
    search_date = models.DateField(auto_now_add=True)
    search_time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return self.keywords
    