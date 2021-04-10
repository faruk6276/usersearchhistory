from django.shortcuts import render
from .models import History    
# Create your views here.
def index(request):
    total_data = History.objects.all()
    k={}
    for value in total_data:
        if value.keywords in k:
            k[value.keywords]+=1
        else:
            k[value.keywords]=1
    u=set()
    for value in total_data:
        if value.user not in u:
            u.add(value.user)
    return render(request,'home.html',{'total_data': total_data,'total_keywords':k,'users':u})