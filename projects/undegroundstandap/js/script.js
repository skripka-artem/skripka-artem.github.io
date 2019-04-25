/*  Start home slider  */
  let $status = $('.homeInfo');
  let $status2 = $('.homeInfo2');
  let time = 2;
  let $bar,
    $slick,
    isPause,
    tick,
    percentTime;
  $slick = $('.slider-home');
  $bar = $('.slider-progress .home');

  $slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $status.html("<span>" + '0' + i + "</span>");
    $status2.html("<span>" + '0' + slick.slideCount + "</span>");
  });

  $slick.slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    speed: 1200,
    adaptiveHeight: true
  });

  $('.prevHome').on('click', function() {
    $('.slider-home').slick('slickPrev');
  });

  $('.nextHome').on('click', function() {
    $('.slider-home').slick('slickNext');
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 60);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slick.slick('slickNext');
        startProgressbar();
      }
    }
  }
  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  startProgressbar();
  $('.prevHome, .nextHome').click(function () {
    startProgressbar();
  });

/*  End home slider  */

/*  Start afisha slider  */
let $afishaInfo = $('.afishaInfo');
  let $afishaInfo2 = $('.afishaInfo2');
  let timeA = 2;
  let isPauseA,
    tickA,
    percentTimeA;
  $slickAfisha = $('.afisha-slider');
  let $barA = $('.slider-progress .afishaProgress');

  $slickAfisha.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let iA = (currentSlide ? currentSlide : 0) + 1;
    $afishaInfo.html("<span>" + '0' + iA + "</span>");
    $afishaInfo2.html("<span>" + '0' + slick.slideCount + "</span>");
  });

  $slickAfisha.slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    speed: 1200,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });

  $('.afishaPrev').on('click', function() {
    $('.afisha-slider').slick('slickPrev');
  });

  $('.afishaNext').on('click', function() {
    $('.afisha-slider').slick('slickNext');
  });

  function startProgressbarA() {
    resetProgressbarA();
    percentTimeA = 0;
    isPauseA = false;
    tickA = setInterval(intervalA, 60);
  }

  function intervalA() {
    if (isPauseA === false) {
      percentTimeA += 1 / (timeA + 0.1);
      $barA.css({
        width: percentTimeA + "%"
      });
      if (percentTimeA >= 100) {
        $slickAfisha.slick('slickNext');
        startProgressbarA();
      }
    }
  }
  function resetProgressbarA() {
    $barA.css({
      width: 0 + '%'
    });
    clearTimeout(tickA);
  }
  startProgressbarA();
  $('.afishaPrev, .afishaNext').click(function () {
    startProgressbarA();
  });

/*  End afisha slider  */


 let tab; 
let tabContent; 


window.onload=function() {
    tabContent=document.getElementsByClassName('video-variants__tabContent');
    tab=document.getElementsByClassName('video-variants__tab');
    hideTabsContent(1);
}

document.getElementById('video-variants__tabs').onclick= function (event) {
    let target=event.target;
    if (target.className=='video-variants__tab') {
       for (let i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (let i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

/*  Start comedians slider  */

$('.comedians-slider').slick({ 
  slidesToShow: 1,  
  slidesToScroll: 1, 
  arrows:false, 
  asNavFor: '.comedians-slider__nav' 
});

$('.comedians-slider__nav').slick({ 
  slidesToShow: 4, 
  asNavFor: '.comedians-slider', 
  focusOnSelect: true ,
  arrows: false,
    dots: false,
});

$('.comedians__arrow').on('click', function() {
  $('.comedians-slider__nav').slick('slickNext');
});



/*  End comedians slider  */




/*  Start place slider  */

$('.place-slider-container').slick({ 
  slidesToShow: 1,  
  slidesToScroll: 1, 
  arrows:false, 
  asNavFor: '.place-slider-nav' 
});

$('.place-slider-nav').slick({ 
  slidesToShow: 4, 
  asNavFor: '.place-slider-container', 
  focusOnSelect: true ,
  arrows: false,
    dots: false,
});


$('.placePrev').on('click', function() {
  $('.place-slider-nav').slick('slickPrev');
});

$('.placeNext').on('click', function() {
  $('.place-slider-nav').slick('slickNext');
});

/*  End place slider  */


$('.languageAndForma__forma button').on('click', function() {
  if ($(".forma").hasClass("active")) {
    $('.forma').removeClass('active');
  } else {
    $('.forma').addClass('active');
  }

});

$('#com').on('click', function() {
  $('#popapComedian__container').css("display","flex");

});

$('.popapClose').on('click', function() {
  $('#popapComedian__container').css("display","none");

});


$('#afishas').on('click', function() {
  $('#popapAfisha__container').css("display","flex");

});

$('.burger').on('click', function() {
  if ($(".menu").hasClass("active")) {
    $('.menu').removeClass('active');
    $('.menu').removeClass('mob');
  } else {
    $('.menu').addClass('active');
    $('.menu').addClass('mob');
  }

});

$('.popapClose').on('click', function() {
  $('#popapAfisha__container').css("display","none");

});



$(".languageAndForma__current-option").click(function(){
  customOptionsBlock = $(".languageAndForma__custom-options");
  if (customOptionsBlock.is(":hidden")) {
      $(".languageAndForma__custom-options").show();
  }
  else {
      $(".languageAndForma__custom-options").hide();
  }
});

$(".languageAndForma__custom-options li").click(function(){
  choosenValue = $(this).attr("data-value");
  $("select").val(choosenValue).prop("selected", true);
  $(".languageAndForma__current-option span").text($(this).text());
  $(".languageAndForma__current-option").attr("data-value", choosenValue);
  $(".languageAndForma__custom-options").hide();

});




