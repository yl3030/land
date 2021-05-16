 // banner
 var Bswiper = new Swiper("#banner", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: "#banner-pag",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".Bnext",
      prevEl: ".Bprev",
    },
  });
  $("#banner").mouseenter(function () {
    Bswiper.autoplay.stop();
  });
  $("#banner").mouseleave(function () {
    Bswiper.autoplay.start();
  });

//   service
var Sswiper1 = new Swiper("#service1", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: "#service1-pag",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".Bnext",
    //   prevEl: ".Bprev",
    // },
  });

  //   service
var Sswiper1 = new Swiper("#service2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: "#service2-pag",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".Bnext",
    //   prevEl: ".Bprev",
    // },
  });

  //   service
var Sswiper1 = new Swiper("#service3", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: "#service3-pag",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".Bnext",
    //   prevEl: ".Bprev",
    // },
  });

  //   service
var Sswiper1 = new Swiper("#service4", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: "#service4-pag",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".Bnext",
    //   prevEl: ".Bprev",
    // },
  });