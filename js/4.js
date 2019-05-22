$(function(){
	$(".center_top a").tap(function(){
        var index=$(this).index()
        $(".center_top .product-tab-con").eq(index).css("display","block").siblings(".center_top .product-tab-con").css("display","none")
        $(".center_bottom .product-tab-con").css("display","none")
    })
    $(".center_bottom a").tap(function(){
        var index=$(this).index()
        $(".center_bottom .product-tab-con").eq(index).css("display","block").siblings(".center_bottom .product-tab-con").css("display","none")
        $(".center_top .product-tab-con").css("display","none")
    })
    $(".product-download-th p").tap(function(){
    	$(this).addClass("active").siblings().removeClass("active")
    })
    $("#p1").tap(function(){
    	$("#td1").css("display","block").siblings(".product-td").css("display","none")
    })
    $("#p2").tap(function(){
    	$("#td2").css("display","block").siblings(".product-td").css("display","none")
    })
    $("#p3").tap(function(){
    	$("#td3").css("display","block").siblings(".product-td").css("display","none")
    })
    $("#p4").tap(function(){
    	$("#td4").css("display","block").siblings(".product-td").css("display","none")
    })
    $("#tit1").tap(function(){
    	$("#con1").css("display","block").parent(".product-inside-list").siblings().find(".product-list-con").css("display","none")
    })
    $("#tit2").tap(function(){
    	$("#con2").css("display","block").parent(".product-inside-list").siblings().find(".product-list-con").css("display","none")
    })
    $("#tit3").tap(function(){
    	$("#con3").css("display","block").parent(".product-inside-list").siblings().find(".product-list-con").css("display","none")
    })
    $("#tit4").tap(function(){
    	$("#con4").css("display","block").parent(".product-inside-list").siblings().find(".product-list-con").css("display","none")
    })
    $("#tit5").tap(function(){
    	$("#con5").css("display","block").parent(".product-inside-list").siblings().find(".product-list-con").css("display","none")
    })
})