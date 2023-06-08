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
 // ページが読み込まれたときに実行される関数
 function fadeElements() {
  var fadeElements = document.querySelectorAll('.fade-in');
  
  // スクロールイベントのハンドラ関数
  function fade() {
    fadeElements.forEach(function(element) {
      var elementTop = element.getBoundingClientRect().top;
      var elementBottom = element.getBoundingClientRect().bottom;
      
      // ウィンドウの中央に要素が表示された場合にフェードイン
      if (elementTop < window.innerHeight && elementBottom >= 0) {
        element.style.opacity = "1";
      }
    });
  }
    fade();
    
    // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', fade);
  }
  
  // ページが読み込まれたときにfadeElements関数を実行
  window.addEventListener('load', fadeElements);


 
  // $(window).on('load',function(){
  //   $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
  //   //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  //   $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
  //   $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
  //   });
  //   //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
  //   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  //   $('.splashbg').on('animationend', function() { 
  //   //この中に動かしたいJSを記載
  //   });
  //   //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
  //   });

  