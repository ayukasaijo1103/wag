const loadingAreaGrey=document.querySelector('#loading');
window.addEventListener('load',()=>{
  //ローディング中(グレースクリーン)
  loadingAreaGrey.animate(
      {
          opacity:[1,0],
          visibility:'hidden',
      },
      {
          duration:2000,
          delay:1200,
          easing:'ease',
          fill:'forwards',
      }
  );
});
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

  $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });
 
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

  $('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
  });