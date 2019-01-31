from django.shortcuts import render
from django.http import HttpResponse

#views are just a python function which take a user request and give them back something(mostly a webpage)
# Create your views here.

#index used in sh_app/urls.py

from rest_framework import viewsets
from sh_app.serializers import SharesSerializer, CompanySerializer
from sh_app.models import SharesModel, CompanyModel

class SharesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = SharesModel.objects.all()
    serializer_class = SharesSerializer


class CompanyViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows groups to be viewed or edited
	"""

	queryset=CompanyModel.objects.all()
	serializer_class=CompanySerializer

def index(request):
	return HttpResponse("<h1> This is the share app homepage")