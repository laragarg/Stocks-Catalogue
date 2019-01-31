#from django.contrib.auth.models import User, Group
from rest_framework import serializers
from sh_app.models import SharesModel, CompanyModel

class SharesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SharesModel
        fields = ('company', 'date')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CompanyModel
        fields = ('__all__')

#class GroupSerializer(serializers.HyperlinkedModelSerializer):
 #   class Meta:
  #     model = Group
 	#     fields = ('url', 'name')