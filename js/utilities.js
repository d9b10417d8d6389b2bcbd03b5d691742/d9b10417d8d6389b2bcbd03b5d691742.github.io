function CopyCommand() {
    $(".commandbox").focus().select();
    document.execCommand("copy");
    $(".commandbox");
};

function GetCommand() {
    if ($(".acceptterms").is(":checked")) {
        $(".codeclaim").slideDown();
        $(".acceptterms").attr("disabled", true);
    }
};

function GetHelp() {
    $(".help").slideDown(1000);
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
};
