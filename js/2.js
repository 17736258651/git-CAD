$(".product-tab a").click(function(){
	var ind = $(this).index();
	$(".product-tab-con").eq(ind).css({"display":"block"}).siblings(".product-tab-con").css({"display":"none"})
})
$(".tab-a").click(function(){
	$(".tab-triangle").animate({left:"495px"})
})
$(".tab-b").click(function(){
	$(".tab-triangle").animate({left:"785px"})
})
$(".tab-c").click(function(){
	$(".tab-triangle").animate({left:"1075px"})
})
$(".tab-d").click(function(){
	$(".tab-triangle").animate({left:"1365px"})
})
$(".product-download-th span").click(function(){
	var sind = $(this).index();
	$(".product-td").eq(sind).css({"display":"block"}).siblings(".product-td").css({"display":"none"})
})
$(".product-download-th span").click(function(){
	$(this).addClass("active").siblings().removeClass("active")
})