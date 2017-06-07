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

$('select').styler();

$('select').change(function() {
	var value = $(this).val();
	$(this).find('option').each(function() {
		if ( $(this).val() == value ) $(this).prop('disabled', true);
	});
	$('select').trigger('refresh');
});

(function($) {
$(function() {

$(':checkbox').styler();

var checked = false;
$('#selall').click(function() {
    if (checked) {
        $(':checkbox').each(function() {
            $(this).prop('checked', false).trigger('refresh');
        });
        checked = false;
    } else {
        $(':checkbox').each(function() {
            $(this).prop('checked', true).trigger('refresh');
        });
        checked = true;
    }
    return false;
});

});
})(jQuery)  ;
