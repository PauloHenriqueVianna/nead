$('#container').fullContent({
    stages: 'div',
    mapPosition: [{v: 2, h: 2}, {v: 1, h: 2}, {v: 3, h: 2 }, {v: 3, h: 1}, {v: 3, h: 3}, {v: 2, h: 1}, {v: 2, h: 3}, {v: 4, h: 2}, {v: 5, h: 2}],
    stageStart: 1,
    idComplement: 'page_'
});

$(function () {
    $('.tlt').textillate({ in: { effect: 'fadeInDownBig' } });
    $('.tlt2').textillate({ initialDelay: 1200, in: { effect: 'fadeInDownBig' } });
    $('.tlt3').textillate({ initialDelay: 2500, in: { effect: 'bouceIn' } });
});

$(function() {  
  $(".noticia").click (function() {
  	var id = $(this).attr("id");
  	var div = $('#noticia-'+id);
  	console.log(div.html());
  	if (div.html() == ''){
	  	$.ajax({  
		  	type: "GET",  
		  	url: "noticia",
		  	data: "id=" + id,
		  	success: function (response){
		  		div.html(response);
		  		div.slideToggle('slow');
		  	}  
		  }); 
	}else{
		div.slideToggle('slow');
		}
	return false; 
  });  
});