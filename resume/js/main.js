


$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });















    var tabb; // заголовок вкладки
    var tabContent; // блок содержащий контент вкладки


    window.onload=function() {
        tabContent=document.getElementsByClassName('tabContent');
        tabb=document.getElementsByClassName('tabb');
        hideTabsContent(1);
    }

    document.getElementById('tabb').onclick= function (event) {
        var target=event.target;
        if (target.className=='tabb') {
            for (var i=0; i<tabb.length; i++) {
                if (target == tabb[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }

    function hideTabsContent(a) {
        for (var i=a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tabb[i].classList.remove('whiteborder');
        }
    }

    function showTabsContent(b){
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tabb[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    });

