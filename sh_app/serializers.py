#from django.contrib.auth.models import User, Group

#serializers are basically used to convert code into JSON
from rest_framework import serializers
from sh_app.models import SharesModel, CompanyModel

class SharesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SharesModel
        fields = ('__all__') #returns everything

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CompanyModel
        fields = ('__all__')

#class GroupSerializer(serializers.HyperlinkedModelSerializer):
#    class Meta:
#		model = Group
#		fields = ('url', 'name')