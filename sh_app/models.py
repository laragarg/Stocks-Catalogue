from django.db import models
#from peewee import SqliteDatabase, Model, CharField, DateTimeField, \
#	DoubleField, IntegerField, ForeignKeyField

#blueprint for our database
# Create your models(classes) here.


class CompanyModel(models.Model):
	#company name
	company_symbol = models.CharField(unique=True, null=False, max_length=10)
	class Meta:
		db_table = 'companymodel'

class SharesModel(models.Model):

	#Foreign key is to link company model with shares model, with every comapny having a unique key to match with the values in this class
	company=models.ForeignKey(CompanyModel, on_delete=models.CASCADE) #on delete- deletes data of every field of this class if any company is deleted
	
	date=models.DateTimeField()
	sh_open=models.FloatField()
	sh_close=models.FloatField()
	sh_volume=models.FloatField()
	sh_low=models.FloatField()
	sh_high=models.FloatField()

	class Meta:
		db_table = 'sharesmodel'