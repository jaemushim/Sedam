// Swiper1

var mySwiper = new Swiper(".swiper1", {
  // Optional parameters
  loop: true,
  // autoplay: {
  //     delay: 7000,
  //     disableOnInteraction:false,
  //   },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper2
var swiper = new Swiper(".swiper2", {
  loop: true,
  // autoplay: {
  //     delay: 7000,
  //     disableOnInteraction:false,

  //   },
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
