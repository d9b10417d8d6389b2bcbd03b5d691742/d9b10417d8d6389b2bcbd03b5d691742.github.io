/*Script of commandjam.tk
Copyright © 2019 CommandJam - All Rights Reserved*/
function CopyCommand() { $(".commandbox").focus().select(); document.execCommand("copy"); $(".commandbox"); setTimeout(function () { Msg("The command has been copied to your clipboard.", "copy") }, 100)};function GetCommand() { if ($(".acceptterms").is(":checked")) { $(".codeclaim").slideDown(); $(".acceptterms").attr("disabled", true); } else { setTimeout(function () { Msg("Please accept the Terms Of Use first!", "no") }, 100) }};function GetHelp() { $(".help").slideDown(1000); $("html, body").animate({ scrollTop: $(document).height() }, 2500, "linear");};function OpenPage(page) { window.location = '/' + page;};var msgbox = false;function Msg(msg, iconname) { if (!msgbox) { var icon = ""; if (iconname == "copy") { icon = "<i class='far fa-copy' style='color: #a09da2'></i>"; }; if (iconname == "no") { icon = "<i class='far fa-times-circle' style='color: #ac3030'></i>"; }; if (iconname == "yes") { icon = "<i class='fas fa-check' style='color: #48ac30'></i>"; }; $("content").prepend("<div class='msgbox'>" + icon + "<p>" + msg + "</p><div><button onclick='CloseMsgBox()'>Ok</button></div></div>"); $(".msgbox").fadeIn(200); msgbox = true; }};function CloseMsgBox() { $(".msgbox").fadeOut(200); $(".msgbox").addClass("deletedsmgbox"); $(".msgbox").removeClass("msgbox"); setTimeout(function () { $('.deletedsmgbox').remove(); msgbox = false; }, 200);}function Warn(message) { $("<div class=\"warn\"><svg class=\"blackbottle\"><g transform=\"scale(0.3) translate(0, -10)\"><circle cx=\"59.2\" cy=\"115.7\" r=\"6.3\"/><path class=\"st0\" d=\"M135.8,105.9h-15.7V90.7h-14.3V76H90.7c-0.3-1,0.1-0.5-0.5-1V55c0-3.1-0.4-7.2,0.5-9.5h15.2V15.7c-4.4,0-12.2,0.8-15.7-0.5V0H46v15.2h-0.5v0.5H30.4v29.9c4.4,0,12.2-0.8,15.7,0.5c0,9.2,1,21.7-0.5,29.9H30.4v14.2H16.2v15.7c-4.5,0-12.6-0.8-16.1,0.5v66.4c0,2.6-0.2,5.8,0.5,7.6h29.9V196h75.4v-16.1h30.4v-66.4C136.2,110.9,136.4,107.7,135.8,105.9zM85,135.3c-7.2,0-13.4-4.6-16.5-11.4c-3.1,6.8-9.3,11.4-16.5,11.4c-10.3,0-18.7-9.6-18.7-21.3c0-2.6,0.4-5,1.2-7.3l22.8-13.1c4.9,1.6,8.9,5.5,11.3,10.5c2.3-5,6.4-8.9,11.3-10.5l22.8,13.1c0.7,2.3,1.2,4.7,1.2,7.3C103.7,125.8,95.3,135.3,85,135.3z\"/><circle cx=\"79.6\" cy=\"115.7\" r=\"6.3\"/></g></svg><p>" + message + "</p><a class= \"closeWarn\" onclick= \"CloseWarn();\">X</a></div>").insertAfter("nav").hide().slideDown(300);}function CloseWarn() { $(".warn").slideUp(300).delay(300).queue(function () { $(this).remove() });}function HasParameter(name) { return ("&"+window.location.search.substring(1)).search(RegExp('&'+name+'='))>=0}function GetParameter (name) { return ("&"+window.location.search.substring(1)+"&").match(RegExp('(&'+name+'=)(.*?)&'))[2]}