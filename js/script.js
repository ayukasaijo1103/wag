document.addEventListener("DOMContentLoaded", function(event) {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000); // スライド切り替えの間隔を調整 (ミリ秒単位)
  
    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  });