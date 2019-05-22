$(".dropdown").mouseenter(function() {
    $(this).addClass("header_nav_active").siblings().removeClass("dropdown");
}).mouseleave(function() {
    $(this).removeClass("header_nav_active");
})
$(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $("#fhdb").fadeIn()
        } else {
            $("#fhdb").fadeOut()
        }
    })
$(window).scroll(function(){
				if($(window).scrollTop()>=80){
				$(".header").addClass("navbar-min")
				}else{
					$(".header").removeClass("navbar-min")
				};
			})
$(".dropdown1").mouseenter(function() {
        $(".dropdown-menu1").stop().slideDown(300)
    }).mouseleave(function() {
        $(".dropdown-menu1").stop().slideUp(300)
    })
    $(".dropdown2").mouseenter(function() {
        $(".dropdown-menu2").stop().slideDown(300)
    }).mouseleave(function() {
        $(".dropdown-menu2").stop().slideUp(300)
    })
    $(".dropdown3").mouseenter(function() {
        $(".dropdown-menu3").stop().slideDown(300)
    }).mouseleave(function() {
        $(".dropdown-menu3").stop().slideUp(300)
    })
    $(".dropdown4").mouseenter(function() {
        $(".dropdown-menu4").stop().slideDown(300)
    }).mouseleave(function() {
        $(".dropdown-menu4").stop().slideUp(300)
    })
    $(".dropdown5").mouseenter(function() {
        $(".dropdown-menu5").stop().slideDown(300)
    }).mouseleave(function() {
        $(".dropdown-menu5").stop().slideUp(300)
    })
    $(".dq").mouseenter(function() {
        $(".language-con").stop().slideDown(300)
    }).mouseleave(function() {
        $(".language-con").stop().slideUp(300)
    })
$(".prduct_menu a").click(function(){
	var ind = $(this).index();
	$(".product-list").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
})
$(".prduct_menu .menu_a").click(function(){
	$(".triangle").animate({left:"30%"})
})
$(".prduct_menu .menu_b").click(function(){
	$(".triangle").animate({left:"43%"})
})
$(".prduct_menu .menu_c").click(function(){
	$(".triangle").animate({left:"56%"})
})
$(".prduct_menu .menu_d").click(function(){
	$(".triangle").animate({left:"69%"})
})
$(".prduct_menu a").click(function(){
	$(this).addClass("prduct_menu-active").siblings().removeClass("prduct_menu-active")
})
$(".dq").mouseenter(function(){
	$(".dq>i,.yy").css({color:"blue"})
}).mouseleave(function(){
	$(".dq>i,.yy").css({color:"#909090"})
})
$(".span-news-icon").mouseenter(function(){
	$(this).addClass("span-news-icon-active")
}).mouseleave(function(){
	$(this).removeClass("span-news-icon-active")
})

$("#fhdb").click(function() {
    $("html,body").animate({ scrollTop: "0px" }, 500)
})
$(".information-e,.info-hide").mouseenter(function(){
	$(".info-hide").css({display:"block"})
}).mouseleave(function(){
	$(".info-hide").css({display:"none"})
})