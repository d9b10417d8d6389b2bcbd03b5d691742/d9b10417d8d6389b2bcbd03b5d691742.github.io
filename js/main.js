/*Script of commandjam.tk
Copyright © 2018 CommandJam - All Rights Reserved*/
$(function () {
    $(".menuicon").children().on("click", function () {
        $(".menu").toggleClass("menuopen");
    });
    var scTop = $(window).scrollTop();
    holidaytheme();
    cconsentcheck();
});
$(window).on("scroll", function () {
    var scTop = $(window).scrollTop();
    if (scTop > 100) {
        $("nav").addClass("darknavbar");
    } else {
        $("nav").removeClass("darknavbar");
    };
});

function cconsentcheck() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#111215",
                "text": "#a09da2"
            },
            "button": {
                "background": "#306bac"
            }
        },
        "content": {
            "href": "https://www.commandjam.tk/privacypolicy"
        }
    })
}

function holidaytheme() {
    var date = new Date();
    var month = date.getMonth();
    if (month === 11) {
        $("body").prepend("<canvas id=\"backcanvas\"></canvas><script src=\"js/snow.js\"></script>");
    }
}
