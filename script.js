let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}
document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

// Swiper
document.addEventListener("DOMContentLoaded", function () {
  var reviewsSwiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
    },
  });
});

