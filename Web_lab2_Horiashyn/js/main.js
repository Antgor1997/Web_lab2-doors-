$(".item__img").slick({
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true
});

$(".metal-doors .active__item").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false
});



$(".galery .slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});

$(".galery").magnificPopup({
    delegate: ".slick-track a",
    type: "image",
    tLoading: "Загрузка изображения",
    gallery: {
        enabled: true,
        navigateByImgClick:false
    },
    zoom: {
        enabled: true,
        duration:300
    }
});




$(".tab_mass.tab__slider").slick({
  autoplay: false,
  asNavFor: '.popular .tab_mass'
});
$(".tab_shpon.tab__slider").slick({
  autoplay: false,
  asNavFor: '.popular .tab_shpon'
});
$(".tab_eco-shpon.tab__slider").slick({
  autoplay: false,
  asNavFor: '.popular .tab_eco-shpon'
});




$(".popular .slide_block.tab_eco-shpon ").slick({
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  asNavFor: '.tab_eco-shpon.tab__slider'
});


$(".popular .slide_block.tab_shpon ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: '.tab_shpon.tab__slider'
});
$(".popular .slide_block.tab_mass ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: '.tab_mass.tab__slider'
});
$(".furnitura .slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000
});
$(".furnitura .furnitura__brand").slick({
  arrows: false,
  dots: false,
  slidesToShow: 15,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 10000
});


$(".room_doors .tab__slider").magnificPopup({
    delegate: ".slick-track a",
    type: "image",
    tLoading: "Загрузка изображения",
    gallery: {
        enabled: true,
        navigateByImgClick:false
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});

$(".sert .active").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    tLoading: "Загрузка изображения",
  gallery: {
    enabled: true,
      navigateByImgClick:false
  },
  zoom: {
        enabled: true,
      duration: 300
  }
});
$(".furnitura .active").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    tLoading: "Загрузка изображения",
    gallery: {
        enabled: true,
        navigateByImgClick:false
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});
$(".metal-doors").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    tLoading: "Загрузка изображения",
    gallery: {
        enabled: true,
        navigateByImgClick:false
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});

$(".about").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    tLoading: "Загрузка изображения",
    gallery: {
        enabled: true,
        navigateByImgClick:false
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});

$(".popular").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    tLoading: "Загрузка изображения",
    gallery: {
        enabled: true,
        navigateByImgClick:false
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});

//Зхлопування
$(document).ready(function() {
    $(window).scroll(function(){
        if ($(document).scrollTop() >127){
            $("#hide_on_scroll").css("display", "none");
        } else {
            $("#hide_on_scroll").css("display", "flex");
        }
    });
});


$("#call_back").click(function() {
  $("#form-call-back,#over").addClass("showFlex");
});

$("#conf_button").click(function(){
    $("#conf,#over").addClass("showFlex");
});

$(".close").click(function() {
  $("#form-call-back,#conf,#over").removeClass("showFlex");
});

$("#menu__button").click(function() {
  $(".line").toggleClass("cross");
  $("header .header__row_second").toggleClass("showFlex");
});

$("header .header__row_second li").click(function() {
  $(".line").toggleClass("cross");
  $("header .header__row_second").toggleClass("showFlex");
});
