//ローディングメニュー=====================================
const loadingAreaGrey=document.querySelector('#loading');
const loadingimg=document.querySelector('#loading img');
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
    loadingimg.animate(
    {
      opacity:[1,0],
      rotate:['-25deg',0],
    },
    {
      duration:1200,
      ease:'easing',
      fill:'forwards',
      iterations:1,
    }
    );
});

//フェードイン=====================================
const animateFade=(entries,obs)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.animate(
        {
          opacity:[0,1],
          filter:['blur(.4rem)','blur(0)'],
          translate:['0 4rem',0],
        },
        {
          duration:2000,
          easing:'ease',
          fill:'forwards',
        }
        );
        obs.unobserve(entry.target);
      }
    });
  };
  const fadeObserver=new IntersectionObserver(animateFade);
  const fadeElements=document.querySelectorAll('.fadein');
  fadeElements.forEach((fadeElement)=>{
    fadeObserver.observe(fadeElement);
  });


  



//メインメニュー=====================================
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

//ページ内リンク=====================================
$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });
//ニュースページ=====================================
const items = document.querySelectorAll('.img-item');
//console.log(items);

for (let i = 0; i < items.length; i++) {
  const key = {
    opacity: [0, 1]
  };
  const opt = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(key, opt);
}
// const items=document.querySelectorAll('.img-item');
// for(let i=0;i<items.length;i++){
//   console.log(i);
//   const key={
//     opacity:[0,1]
//   };
//   const option={
//     duration:600,
//     delay:i*300,
//     fill:'forwards',
//   };
//   items[i].animate(key,option);
// }
 
    
//メニューページ=====================================
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

