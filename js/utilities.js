function CopyCommand() {
    $(".commandbox").focus().select();
    document.execCommand("copy");
    $(".commandbox");
};

function GetCommand() {
    if ($(".acceptterms").is(":checked")) {
        $(".codeclaim").slideDown();
    }
};