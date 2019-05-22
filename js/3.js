$(function(){
    $(".san3").tap(function(){
        $(this).addClass("active1")
        $(".navbar-brand").toggle()
        $("#navbar-toggle").toggle()
        $(".navbar-collapse").animate({top:"0"},300)
    })
    $(".san33").tap(function(){
        $("#san1").removeClass("active1")
        $(".navbar-brand").toggle()
        $("#navbar-toggle").toggle()
        $(".navbar-collapse").animate({top:"-20rem"},300)
    })
    $(".product-menu a").tap(function(){
        $(this).addClass("prduct_menu-active").siblings().removeClass("prduct_menu-active")
        var index=$(this).index()
        $(".product-con .product-list").eq(index).css("display","block").siblings().css("display","none")
    })
})
    