var swiper = new Swiper(".mySwiper", {
         
    spaceBetween: 30,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,  
    },breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 35,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });