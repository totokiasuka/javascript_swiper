// JavaScript
// console.log('Hello world!');
// ここにコードを追加します
const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',tateidouninattesimau
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });