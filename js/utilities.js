function CopyCommand() {
    $(".commandbox").focus().select();
    document.execCommand("copy");
    $(".commandbox");
    setTimeout(function(){
        Msg("The command has been copied to your clipboard.", "copy")
    }, 100)
};

function GetCommand() {
    if ($(".acceptterms").is(":checked")) {
        $(".codeclaim").slideDown();
        $(".acceptterms").attr("disabled", true);
    } else {
        setTimeout(function(){
            Msg("Please accept the Terms Of Use first!", "no")
        }, 100)
    }
};

function GetHelp() {
    $(".help").slideDown(1000);
    $("html, body").animate({scrollTop:$(document).height()}, 2500, "linear");
};

function OpenPage(page) {
    window.location = '/'+ page;
};

var msgbox = false;
function Msg(msg, iconname) {
    if (!msgbox) {
        var icon = "";
        if(iconname == "copy") {
            icon = "<i class='far fa-copy' style='color: #a09da2'></i>";
        };
        if(iconname == "no") {
            icon = "<i class='far fa-times-circle' style='color: darkred'></i>";
        };
        if(iconname == "yes") {
            icon = "<i class='fas fa-check' style='color: limegreen'></i>";
        };
        $("content").prepend("<div class='msgbox'>" + icon + "<p>" + msg + "</p><div><button onclick='CloseMsgBox()'>Ok</button></div></div>");
        $(".msgbox").fadeIn(200);
        msgbox = true;
    }
};

function CloseMsgBox() {
    $(".msgbox").fadeOut(200);
    $(".msgbox").addClass("deletedsmgbox");
    $(".msgbox").removeClass("msgbox");
    setTimeout(function() {
        $('.deletedsmgbox').remove();
        msgbox = false;
    }, 200);
}