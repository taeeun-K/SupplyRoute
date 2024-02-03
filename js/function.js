

//서브메뉴-카테고리 구동
$(window).load(function(){

  const $gnb = $('ul.nav li.sub01');
  const $lnb = $('.subMenu.category');

  $lnb.hide()

  $gnb.on('mouseenter', function(){
    $lnb.stop().fadeIn(200);
  });

  $gnb.on('mouseleave', function(){
    $lnb.stop().fadeOut(200);
  });  

  $lnb.on('mouseenter', function(){
    $lnb.stop().fadeIn(200);
  });

  $lnb.on('mouseleave', function(){
    $lnb.stop().fadeOut(200);
  });  
});

//서브메뉴-브랜드 구동
$(window).load(function(){

  const $gnb = $('ul.nav li.sub02');
  const $lnb = $('.subMenu.brand');

  $lnb.hide()

  $gnb.on('mouseenter', function(){
    $lnb.stop().fadeIn(200);
  });

  $gnb.on('mouseleave', function(){
    $lnb.stop().fadeOut(200);
  });  

  $lnb.on('mouseenter', function(){
    $lnb.stop().fadeIn(200);
  });

  $lnb.on('mouseleave', function(){
    $lnb.stop().fadeOut(200);
  });  
});




// 인기브랜드 탭영역
const $tab = document.querySelectorAll('.topBrand .tabBox ul li a');
const $tabCont = document.querySelectorAll('.thumbArea');

let nowIdx = 0;

$tab.forEach(function(tabMnu,idx){
  tabMnu.addEventListener('click', function(evt){
    evt.preventDefault();

    $tab.forEach(function(list,j){
      list.parentElement.classList.remove('on');
    });

    $tabCont.forEach(function(list,j){
      list.style.display = 'none';
    });

    $tab[idx].parentElement.classList.add('on');
    $tabCont[idx].style.display = 'block';
  });
});





// 우하단 aside 버튼박스 스크롤이벤트
$(window).scroll(function(){

  const $aside = $('.aside');
  const $footer =  $('footer');
  let scrollTop = Math.ceil($(this).scrollTop());
 
  console.log(scrollTop);

  if(scrollTop>=1){
    $aside.addClass('active');

  }else{
    $aside.removeClass('active');
  }

  if(scrollTop>8948){
    //  footer영역에 오면 aside버튼 움직임... 어떻게하는가
    $aside.addClass('on');
  }else if(scrollTop<8948){
    $aside.removeClass('on');
  }
});


// 페이지 스크롤이벤트
// 페이지 이동 공통함수
const pagiAni = function(topVal){
  $('html,body').stop().animate({
    scrollTop : topVal
  },400);
};

// TOP버튼 클릭 페이지 상단으로 이동
$('.aside>.toTop').on('click',function(evt){
  evt.preventDefault();
  
  pagiAni(0);
});

// 로고클릭 페이지 상단으로 이동
$('.logo').on('click',function(evt){
  evt.preventDefault();
  
  pagiAni(0);
});

