
new WOW({
  offset: 100,
  mobile: true
}).init();

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  }
});


