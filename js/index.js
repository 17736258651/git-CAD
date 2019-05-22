var mySwiper2 = new Swiper('.swiper-container2', {
    direction: 'horizontal',
    centeredSlides: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    }
})
var mySwiper3 = new Swiper('.employee', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    centeredSlides: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
    }
})
var mySwiper = new Swiper('.swiper-container11', {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
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
var num1 = document.querySelector(".num1")
var num2 = document.querySelector(".num2")
var num3 = document.querySelector(".num3")
var num4 = document.querySelector(".num4")
var t1;
var t2;
var t3;
var t4;
t1 = setInterval(function() {
    var num = (num1.innerHTML);
    num++;
    num1.innerHTML = num;
    if (num === 15) {
        clearInterval(t1);
    }
}, 50)
t2 = setInterval(function() {
    var num = (num2.innerHTML);
    num++;
    num2.innerHTML = num;
    if (num === 170) {
        clearInterval(t2);
    }
}, 50)
t3 = setInterval(function() {
    var num = (num3.innerHTML);
    num++;
    num3.innerHTML = num;
    if (num === 80) {
        clearInterval(t3);
    }
}, 50)
t4 = setInterval(function() {
    var num = (num4.innerHTML);
    num++;
    num4.innerHTML = num;
    if (num === 55) {
        clearInterval(t4);
    }
}, 50)