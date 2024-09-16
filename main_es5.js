"use strict";

var mapHTML = document.getElementById('map');
L.map(mapHTML).setView([51.505, -0.09], 13);
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
