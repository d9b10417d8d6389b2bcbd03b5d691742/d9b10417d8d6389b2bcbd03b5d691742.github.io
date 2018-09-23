$(function() {
    $(".menuicon").children().on("click", function() {
        $(".menu").toggleClass("menuopen");
    });
    var scTop = $(window).scrollTop();
    $("body").css("background-position", "center " +(scTop * 0.8)+ "px");
    });
            
$(window).on("scroll", function() {
    var scTop = $(window).scrollTop();
    if(scTop > 100) {
        $("nav").addClass("darknavbar");
    } else {
        $("nav").removeClass("darknavbar");
    };
    $("body").css("background-position", "center " +(scTop * 0.8)+ "px");
    });