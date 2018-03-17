$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});
$('.jcarousel-pagination').jcarouselPagination({
       item: function(page) {
           return '<a href="#' + page + '">' + page + '</a>';
       }

});

// select
$(function(){

  $('select').selecter();
});

// checkbow
$(function(){
  $(" input[type='checkbox']").ionCheckRadio();
  $(".js-demo-2").find("input").ionCheckRadio();
});

//menu
$(function(){
  $('.menu ul li').hover(
    function() {
      $('ul:first', this).slideDown(150);
    },
    function() {
      $('ul:first', this).slideUp(150);
    }
  );
});
