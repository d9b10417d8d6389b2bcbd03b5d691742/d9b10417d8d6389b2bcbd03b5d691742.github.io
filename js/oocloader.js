$(function() {
    var URLtag = window.location.search.substring(1).split("=");
    if (URLtag[0] == "") {
        $.ajax({
            type: "GET",
            url: "xml/" + URLtag[1] + ".xml",
            success: dataLoader
        });
    }
});

function dataLoader (xml) {
    $(document).attr("title", "CommandJam | " + $(xml).find("name").text());
    $(".pagenametext").text($(xml).find("name").text());
    $(".commandbox").text($(xml).find("command").text());
    $(".codeclaim").hide();
};
