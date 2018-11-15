$(".top_slider_img").slick({
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
    responsive: [
        {
            breakpoint: 361,
            settings: {
                slidesToShow: 1,
                autoplay: false
            }
        }
    ]
});

$(".metal-doors .active__item").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$(".galery .slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
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
    asNavFor: '.popular .tab_mass',
    infinite:true
});
$(".tab_shpon.tab__slider").slick({
    autoplay: false,
    asNavFor: '.popular .tab_shpon',
    infinite:true
});
$(".tab_eco-shpon.tab__slider").slick({
    autoplay: false,
    asNavFor: '.popular .tab_eco-shpon',
    infinite:true
});





$(".popular .slide_block.tab_eco-shpon ").slick({
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  asNavFor: '.tab_eco-shpon.tab__slider',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },{
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$(".popular .slide_block.tab_shpon ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: '.tab_shpon.tab__slider',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },{
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$(".popular .slide_block.tab_mass ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: '.tab_mass.tab__slider',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },{
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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
            $("#hideable").css("display", "none");
        } else {
            $("#hideable").css("display", "flex");
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



document.getElementById('button_nav').onclick=function(){
    var show=document.getElementById('mobile_menu');
    var display =['block', 'none'];
    if(show.style.display!=display[0]){
        show.style.display=display[0];
    } else{
        show.style.display=display[1];
    }
};








