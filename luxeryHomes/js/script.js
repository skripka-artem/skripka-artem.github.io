$(function(){
    $('.button').click(function () {
        $('.modal-shadow').show();
        $('.modal-window').show();
    });

    $('.modal-shadow').click(function () {
        $('.modal-shadow').hide();
        $('.modal-window').hide();
    });

    $('.close').click(function () {
        $('.modal-shadow').hide();
        $('.modal-window').hide();
    });

    $('.button2').click(function () {
        $('.modal-shadow2').show();
        $('.modal-window2').show();
    });

    $('.modal-shadow').click(function () {
        $('.modal-shadow2').hide();
        $('.modal-window2').hide();
    });

    $('.close').click(function () {
        $('.modal-shadow2').hide();
        $('.modal-window2').hide();
    });
});