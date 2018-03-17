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
var $button = $('button');
var $box1 = $('.box1');
   $input.hover(function() {
     var box = '#'+$(this).attr('id')+'_box1';
         $(box).show('slow');
   }, function() {
     var box = '#'+$(this).attr('id')+'_box1';
         $(box).hide('slow');
   });
      })
   $button.on('click', function(){
$($box1).show();
   
});
