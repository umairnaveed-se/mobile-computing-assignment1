var swiper = new Swiper(".swiper-container", {
    freeMode: false,
    effect: "coverflow",
    direction: "horizontal",
    cssMode: true,
    centeredSlides: true,
    slidesPerView: "auto",
    /* mousewheel: {
        releaseOnEdges: true
    }, */
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
});