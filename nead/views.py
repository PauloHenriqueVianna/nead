# -*- coding: utf-8 -*-
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from noticias.models import Noticia

def home(request):
	noticias = Noticia.objects.values('id','titulo','criado_em').order_by('-criado_em')[:4]
	todas_noticias = Noticia.objects.values('id','titulo','criado_em').order_by('-criado_em')
	anos = todas_noticias.dates('criado_em', 'year',order='DESC')
	return render_to_response('index.html',RequestContext(request,{'noticias':noticias, 'todas_noticias':todas_noticias, 'anos':anos}))

def noticia(request):
	id = request.GET.get('id')
	noticia = Noticia.objects.get(id=id)
	return HttpResponse(noticia.texto)