document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    observer: true,
    observeParents: true,
    freeMode: true,
    watchSlidesProgress: true,
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },

  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },

  });
});