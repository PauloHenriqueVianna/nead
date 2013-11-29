# -*- coding: utf-8 -*-
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from noticias.models import Noticia

def home(request):
	noticias = Noticia.objects.values('id','titulo')
	return render_to_response('index.html',RequestContext(request,{'noticias':noticias}))

def noticia(request):
	id = request.GET.get('id')
	noticia = Noticia.objects.get(id=id)
	return HttpResponse(noticia.texto)