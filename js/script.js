'use strict'

$(document).ready(function () {
// magnific popup for gallery
$('.gallery__img').magnificPopup({
    type : 'image',
    gallery : {
        enabled : true
    }
});

// for burger mobile version
  $('.menu-btn').on('click', function(e){
      e.preventDefault;
      $(this).toggleClass('menu-btn_active');
      $('.menu-nav__link').toggleClass('menu-nav__link_active');
      $('.menu-nav').toggleClass('menu-nav_active');
  })

// for button Show more
  $('.button__load--more').on('click', function(e){
    e.preventDefault;
    // $(this).text("Скрыть");
    $('.gallery__slide').toggleClass('gallery__slide--active');
    $('.text__load').toggleClass('text__load--pasive');
    $('.text__unload').toggleClass('text__unload--active');
})
})


