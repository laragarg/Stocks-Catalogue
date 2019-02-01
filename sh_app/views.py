#from django.shortcuts import render
#from django.http import HttpResponse

#views are just a python function which take a user request and give them back something(mostly a webpage)
# Create your views here.

#index used in sh_app/urls.py

from rest_framework import viewsets
from sh_app.serializers import SharesSerializer, CompanySerializer
from sh_app.models import SharesModel, CompanyModel
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework import status

class SharesViewSet(viewsets.ModelViewSet):
    #"""
    #API endpoint that allows users to be viewed or edited.
    #"""
	queryset = SharesModel.objects.all()
	serializer_class = SharesSerializer


class CompanyViewSet(viewsets.ModelViewSet):
	#"""
	#API endpoint that allows groups to be viewed or edited
	#"""

	queryset=CompanyModel.objects.all()
	serializer_class=CompanySerializer

#1
	@action(detail=True, methods=['get'])
	def company_details(self, request, pk):
		queryset = self.get_object()
		serializer_context = {
			'request': request,
		}
		serializer = CompanySerializer(queryset, context=serializer_context)
		return Response(serializer.data)

#2	Share open(returns all the shares which are greater than the input value)
	@action(detail=True, methods=['get'])
	def shares_opening(self, request, pk):
		queryset = self.get_object().sharesmodel_set.all()
		query = request.GET.get('sh_open', '')#from user
		if query:
			queryset = queryset.filter(sh_open__gte=query)

		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

#3	Share Close(returns all the shares which are less than input value)
	@action(detail=True, methods=['get'])
	def shares_closing(self, request, pk):
		print("Inside shares closing")
		queryset = self.get_object().sharesmodel_set.all()
		query = request.GET.get('sh_close', '')
		print("SH_CLOSE: ", query)
		if query:
			queryset = queryset.filter(sh_close__lte=query)		
		
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

#4  Share Range(returns shares in a given range)
	@action(detail=True, methods=['get'])
	def shares_range(self, request, pk):
		queryset = self.get_object().sharesmodel_set.all()
		query1 = self.get_object().sharesmodel_set.all()
		query2 = self.get_object().sharesmodel_set.all()
		query3 = request.GET.get('sh_open', '')#input
		query4 = request.GET.get('sh_close', '')
		if query3 and query4:
			query1 = query1.filter(sh_open__gt=query3)
			query2 = query2.filter(sh_close__lt=query4)
			queryset = queryset.intersection(query1, query2)		
		
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

#5  Share symbol and time(returns the share of a specific symbol at a given time)
	@action(detail=True, methods=['get'])
	def shares_symbol_time(self, request, pk):
		queryset = self.get_object().sharesmodel_set.all()

		#query1 = self.get_object().companymodel_set.all()#company symbol/name
		#query1 = query1.filter(company_symbol__iexact = query3)#iexact is for case-insensitive
		
		query1 = self.get_object().sharesmodel_set.all()#for time
		query2 = request.GET.get('date', '')#time input
		query3 = request.GET.get('company_symbol', '')#name input
		query1 = query1.filter(date__exact = query2)

		if query1 and query2 and query3:
			queryset = queryset.filter(company__iexact = query3)		
		
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

#6 Arrange in order of volume(top 50)


#def index(request):
#	return HttpResponse("<h1> This is the share app homepage")


