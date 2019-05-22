$(function() {
    var mySwiper = new Swiper('.banner', {
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        on: {
            init: function() {
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function() {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
    })
    var mySwiper2 = new Swiper('.swiper-container2', {
        direction: 'horizontal',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        }
    })
    var mySwiper2 = new Swiper('.employee', {
        direction: 'horizontal',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        }
    })
})