
var isDiagramRender1 = false;
var isDiagramRender2 = false;
var diagramData = {
    labels: ["Принять", "Доработать", "Воздержаться"],
    datasets: [{
        data: [112, 77, 14],
        backgroundColor: [
            '#e63737',
            '#3790e6',
            '#d3d3d3'
        ],
        borderWidth: 0
    }]
};

$(document).ready(function(){
	setTopMenu();
	setMobileMenu();
	resetImageHeight();
	setFormAndTopNews();
	setNewsImageHeight();
	setTripleNews();
	setUpDiagramHeight();
	renderDiagram1();
	renderDiagram2();
	setDoubleNews();
	setupBanner();
	$(window).on("resize", function(){
		resetImageHeight();
		setFormAndTopNews();
		setTripleNews();
		setNewsImageHeight();
		setUpDiagramHeight();
		setDoubleNews();
		setupBanner();
		renderDiagram1();
		renderDiagram2();
	});
	$(window).on("scroll", function(){
		setTopMenu();
		setupBanner();
		renderDiagram1();
		renderDiagram2();
	});
});

window.addEventListener("load", function(){
	setFormAndTopNews();
});

function setTopMenu(){
	var b_height = $(".top_banner").height();
	if($(window).scrollTop() > b_height){
		$(".top_menu").css({
			"position" : "fixed",
			"top" : "0"
		});
	}else{
		$(".top_menu").removeAttr("style");
	}
}

function setMobileMenu(){
	/*$(window).on("scroll", function(){
		if($(window).scrollTop() > 200){
			$(".toggle-mnu").addClass("fixed");
		}else{
			$(".toggle-mnu").removeClass("fixed");
		}
	});*/
	$(".toggle-mnu").on("click", function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$('#main_menu').removeClass("active");
		}else{
			$(this).addClass("on");
			$('#main_menu').addClass("active");
		}
	});
	$(".close_mobile_mnu").on("click", function(){
		$(".toggle-mnu").removeClass("on");
		$('#main_menu').removeClass("active");
	});
}

function resetImageHeight(){
	$(".news_image").height("auto");
}
function setNewsImageHeight(){
	$(".news_image").each(function(){
		
		var height = $(this).closest(".news_item").height();
		$(this).height(height);
	});
}

function setFormAndTopNews(){
	var news = $(".big_news");
	var form = $(".reg_form_block");
	news.removeAttr("style");
	form.removeAttr("style");
	if(news.height() > form.height()){
		form.height(news.height());
	}else{
		news.height(form.height());
	}
}

function setTripleNews(){
	var v_news = $(".vertical_news");
	var t_news = $(".news_top");
	var b_news = $(".news_bottom");
	var news_block = $(".news_block_3");
	var offset = 46;
	v_news.removeAttr("style");
	t_news.removeAttr("style");
	b_news.removeAttr("style");
	var v_height = v_news.height();
	var t_height = t_news.height();
	var b_height = b_news.height();
	if(t_height + b_height + offset > v_height){
		if(t_height > b_height){
			b_news.height(t_height);
			t_news.removeAttr("style");
		}else{
			t_news.height(b_height);
			b_news.removeAttr("style");
		}
		v_news.height(news_block.height());
	}else{
		var halfHeight = (news_block.height() - offset)/2;
		if(t_height > halfHeight){
			b_news.height(t_height);
			t_news.removeAttr("style");
		}else if(b_height > halfHeight){
			t_news.height(b_height);
			b_news.removeAttr("style");
		}else{
			t_news.height(halfHeight);
			b_news.height(halfHeight);
		}
		if(v_news.height() < news_block.height()){
			v_news.height(news_block.height());
		}
	}
}
function setUpDiagramHeight(){
	$(".diagram_right").removeAttr("style");
	var height = $(".diagram_block").height();
	if($(".diagram_right").height() < height){
		$(".diagram_right").height(height);
	}
	 
}
function renderDiagram1(){
	if (isDiagramRender1){
		return;
	}

	var d_block = $('.vertical_news');
	if($(window).scrollTop() + $(window).height() < d_block.offset().top + d_block.height()){
		return;
	}
	var ctx1 = document.getElementById("diagram1").getContext('2d');
	isDiagramRender1 = true;
	var myChart1 = new Chart(ctx1, {
	    type: 'bar',
	    data: diagramData,
	    options: {
	    	maintainAspectRatio: false,
	    	scales: {
		        xAxes: [{
		        	display: false
		        }],
		        yAxes: [{
		            display: false
		        }]
		    },
	        tooltips: {
	        	enabled: false
	        },
	        legend: {
	            display: false
	        }
	    }
	});
}

function renderDiagram2(){
	if (isDiagramRender2){
		return;
	}

	var d_block = $('.diagram_block');
	if($(window).scrollTop() + $(window).height() < d_block.offset().top + d_block.height()){
		return;
	}

	var ctx = document.getElementById("myDiagram").getContext('2d');

	isDiagramRender2 = true;
	var myChart2 = new Chart(ctx, {
	    type: 'pie',
	    data: diagramData,
	    options:{
	        tooltips: {
	        	enabled: false
	        },
	        legend: {
	            display: false
	        }
	    }
	});
}

function setDoubleNews(){
	var left_part  = $(".news_block_2 .left_part");
	var right_part = $(".news_block_2 .right_part");
	left_part.removeAttr("style");
	right_part.removeAttr("style");
	if(left_part.height() > right_part.height()){
		right_part.height(left_part.height());
	}else{
		left_part.height(right_part.height());
	}
}


function setupBanner(){
	var container = $(".banner_part");
	var banner    = $('.banner');
	var news_part = $('.news_part');
	var form      = $('.reg_form_block');
	var menu_height  = $('.top_menu').height();
	var margin    = parseInt(form.css("margin-bottom").replace("px", ""));
	var offset = form.offset().top + form.height() - menu_height;
	container.height(news_part.height());
	if($(window).scrollTop() > offset){
		if($(window).scrollTop() + $(".banner").height() + 170 < container.offset().top + container.height() -46){
			banner.css(
			{
				"position": "fixed",
				"top" : "0",
				"bottom" : "auto",
				"right" : margin,
				"margin-top" : menu_height + margin
			});
		}else{
			banner.css(
			{
				"position": "absolute",
				"top" : "auto",
				"bottom" : margin,
				"right" : "0",
				"margin-top" : "0"
			});
		}	
	}else{
		banner.removeAttr("style");
	}
}