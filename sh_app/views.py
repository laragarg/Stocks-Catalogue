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
from rest_framework.decorators import action, list_route
from rest_framework.views import APIView
from rest_framework import status
from datetime import datetime

class SharesViewSet(viewsets.ModelViewSet):
    #"""
    #API endpoint that allows users to be viewed or edited.
    #"""
	queryset = SharesModel.objects.all()
	serializer_class = SharesSerializer

#1 Arranged in order of volume(top 50) on a given day
	#make this default
	@list_route(methods=['get'])#@list_route is used when more than one shares are being operated
	def sh_top(self, request):
		queryset = self.queryset
		query1 = request.GET.get('date', '')#time input
		
		if query1 :
			queryset = queryset.filter(date__exact = datetime.fromtimestamp(float(query1)))
			queryset = queryset.order_by('-sh_volume')#arranges in descending order
			queryset = queryset[:50] #now select first 50 companies
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

#2  Share delta(returns shares of specific difference on a given date)
	# @action(detail=True, methods=['get']) #@ is for decorators
	# def shares_delta(self, request, pk):
	# 	queryset = self.get_object().sharesmodel_set.all()
	# 	query1 = request.GET.get('sh_open', '')#input
	# 	query2 = request.GET.get('sh_close', '')
	# 	query3 = request.GET.get('date', '')

	# 	#print("query1 = ", query1)
	# 	#print("query2 = ", query2)
	# 	#print("query3 = ", query3)

	# 	if query1 and query2 and query3:
	# 		#print("inside if")
	# 		queryset = queryset.difference(query1, query2)
	# 		#print("queryset=", queryset)	
	# 		queryset = queryset.filter(date__exact = datetime.fromtimestamp(float(query3)))
	# 		queryset = 
	# 	serializer_context = {
	# 		'request': request,
	# 	}
	# 	serializer = SharesSerializer(queryset, many=True, context=serializer_context)
	# 	return Response(serializer.data)

#3  Symbol and time returns the share value of a specific symbol at a given time)
	@list_route(methods=['get'])
	def sh_symbol_time(self, request):
		query2 = request.GET.get('date', '')#time input
		query3 = request.GET.get('company', '')#name input
		if query3:
			queryset = CompanyModel.objects.get(company_symbol=query3).sharesmodel_set.all()
		else:
			queryset = self.queryset

		if query2:
			queryset = queryset.filter(date__exact = datetime.fromtimestamp(float(query2)))
		
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

#4	History of a particular share
	@list_route(methods=['get'])
	def sh_history(self, request):
		#query1 = self.get_object().sharesmodel_set.all()#for time
		#query2 = request.GET.get('date', '')#time input
		query3 = request.GET.get('company', '')#name input
		#query1 = query1.filter(date__exact = datetime.fromtimestamp(float(query2)))

		queryset = CompanyModel.objects.get(company_symbol=query3).sharesmodel_set.all()
		
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)

class CompanyViewSet(viewsets.ModelViewSet):
	#"""
	#API endpoint that allows groups to be viewed or edited
	#"""

	queryset=CompanyModel.objects.all()
	serializer_class=CompanySerializer

#1
	@action(detail=True, methods=['get'])
	def comp_details(self, request, pk):
		queryset = self.get_object()
		serializer_context = {
			'request': request,
		}
		serializer = CompanySerializer(queryset, context=serializer_context)
		return Response(serializer.data)

#2	Share open(returns all the shares which are greater than the input value)
	@action(detail=True, methods=['get'])#@action is used when only one share is being operated
	def sh_opening(self, request, pk):
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
	def sh_closing(self, request, pk):
		print("Inside shares closing")
		queryset = self.get_object().sharesmodel_set.all()
		query = request.GET.get('sh_close', '')
		#print("SH_CLOSE: ", query)
		if query:
			queryset = queryset.filter(sh_close__lte=query)		
		
		serializer_context = {
			'request': request,
		}
		serializer = SharesSerializer(queryset, many=True, context=serializer_context)
		return Response(serializer.data)
