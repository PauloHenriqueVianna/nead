from django.contrib import admin
from django.db import models
from redactor.widgets import AdminRedactorEditor
from noticias.models import Noticia
   
class NoticiaAdmin(admin.ModelAdmin):
    readonly_fields = ('criado_por','criado_em')
    list_display = ('titulo','criado_em', 'criado_por')
    formfield_overrides = {
            models.TextField: {'widget': AdminRedactorEditor(redactor_settings={
        'autoformat': True,
        'lang': 'pt',
        'overlay': False
    })},
    }       
        
    def save_model(self, request, obj, form, change): 
        obj.criado_por = request.user
        obj.save()

admin.site.register(Noticia, NoticiaAdmin) 