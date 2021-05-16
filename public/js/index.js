$("#menu-icon").click(function(){
        if ($(this).hasClass("active")) {
            $("header").children("nav").slideUp(300);
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
            $("header").children("nav").slideDown(300);
        }
})

$(".header-menu").children("li").children("a").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parents("li").children(".drop-down").slideUp(300);
        }else {
            $(this).addClass("active");
            $(this).parents("li").children(".drop-down").slideDown(300);
        }
})


// $(".header-menu").children("li").mouseover(function(){
//     if($(window).width() > 768) {
//         $(this).children(".drop-down").slideDown(300);
//     }
// });
// $(".header-menu").children("li").mouseout(function(){
//     if($(window).width() > 768){
//         $(this).children(".drop-down").slideUp(300);
//     }
// })

$(window).on("resize scroll", function () {
    if($(window).width() > 992) {
        $("header").children("nav").css("display","block");
        $(".drop-down").css("display","none");
        $(".header-menu").children("li").children("a").removeClass("active");
    }else {
        $("header").children("nav").css("display","none");
    }
})