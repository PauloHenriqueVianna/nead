# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User

class Noticia(models.Model):
    class Meta:
        ordering = ["-criado_em"]
        verbose_name = 'Notícia'
        verbose_name_plural = 'Notícias'
    
    titulo      =   models.CharField('Título', max_length=140, blank=False)
    texto       =   models.TextField('Notícia', blank = False)
    criado_por  =   models.ForeignKey(User, related_name='criado_por')
    criado_em   =   models.DateTimeField(auto_now_add = True)
    
    def __unicode__(self):
        return self.titulo