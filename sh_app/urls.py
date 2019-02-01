#create all app's urls here and link it with brainwaves/brainwaves/urls.py
from django.contrib import admin
from django.urls import path, include
from . import views # .represents current directory
from rest_framework import routers
from sh_app import views

router = routers.DefaultRouter()
router.register(r'shares', views.SharesViewSet)
router.register(r'company', views.CompanyViewSet)

#urlpatterns = [
 #	path('', views.index, name='index' )#index is the homepage of the section
#]




# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
	path('', include(router.urls)),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
