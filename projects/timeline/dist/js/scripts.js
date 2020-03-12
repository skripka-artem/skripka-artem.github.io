'use strict';

$('.your-class').slick({
    slidesToShow: 1,
    asNavFor: '.your-class2'
});

$('.your-class2').slick({
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 6,
    infinite: false,
    vertical: true,
    asNavFor: '.your-class'
});