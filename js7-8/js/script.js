$(function () {
    var tabContainers = $('.tabs > div');
    var $link = $('div.tabs ul.tabNavigation a');
    $link.on ('click', function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
    })
});

$(function () {
    var $input = $('input');

   $input.hover(function() {
     var box = '#'+$(this).attr('id')+'_box1';
         $(box).show(500);
   }, function() {
     var box = '#'+$(this).attr('id')+'_box1';
         $(box).hide();
   });
   $input.on('click', function(){
     var box = '#'+$(this).attr('id')+'_box1';
         $(box).hide();
   });
});
