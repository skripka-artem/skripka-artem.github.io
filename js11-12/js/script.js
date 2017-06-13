$(function(){
  $('.carousel-arrow-left').carousel();
});



var data = {
	  gallery: [
	    {"text":"1", "src": "img/img1.jpg"},
      {"text":"2", "src": "img/img2.jpg"},
      {"text":"3", "src": "img/img3.jpg"},
      {"text":"4", "src": "img/img4.jpg"},
      {"text":"5", "src": "img/img5.jpg"},
      {"text":"6", "src": "img/img6.jpg"},
      {"text":"7", "src": "img/img7.jpg"},
      {"text":"8", "src": "img/img8.jpg"},
      {"text":"9", "src": "img/img9.jpg"},
      {"text":"10", "src": "img/img10.jpg"},
      {"text":"11", "src": "img/img11.jpg"},
      {"text":"12", "src": "img/img12.jpg"},
      {"text":"13", "src": "img/img13.jpg"},
      {"text":"14", "src": "img/img14.jpg"},
      {"text":"15", "src": "img/img15.jpg"},
      {"text":"16", "src": "img/img16.jpg"},
      {"text":"17", "src": "img/img17.jpg"},
      {"text":"18", "src": "img/img18.jpg"},
      {"text":"19", "src": "img/img19.jpg"},
      {"text":"20", "src": "img/img20.jpg"}
	  ]
	};

	$(document).ready(function(){

		var template = Handlebars.compile( $('#template').html() );
		$('.gallery').append( template(data) );



	});
