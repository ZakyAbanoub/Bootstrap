$(function(){
    var winH      = $(window).height();
    var upperH    = $('.upper-navbar').innerHeight();
    var navH      = $('.navbar').innerHeight();

    $('.slider .image-me').height( winH - (upperH + navH));
});

// $(window).resize(function () {
//     var winH   = $(window).height(),
//     upperH = $(".upper-bar").innerHeight(),
//     navH   = $(".navbar").innerHeight();
//     $(".slide, .carousel-item").height(winH - (upperH + navH));
//    });