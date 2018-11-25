$(function() {
    $(".menuicon").children().on("click", function() {
        $(".menu").toggleClass("menuopen");
    });
    var scTop = $(window).scrollTop();
    $("body").css("background-position", "center " +(scTop * 0.8)+ "px");
    var date = new Date();
    var month = date.getMonth();
    if (month === 10) {
        $("body").prepend("<canvas id=\"backcanvas\"></canvas><script src=\"js/snow.js\"></script>");
    }   
});
            
$(window).on("scroll", function() {
    var scTop = $(window).scrollTop();
    if(scTop > 100) {
        $("nav").addClass("darknavbar");
    } else {
        $("nav").removeClass("darknavbar");
    };
});