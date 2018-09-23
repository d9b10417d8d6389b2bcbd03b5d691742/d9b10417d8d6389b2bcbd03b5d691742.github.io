$(function() {
    $.ajax({
        type: "GET",
        url: "xml/data.xml",
        success: dataLoader
    });
});

function dataLoader (xml) {
    $(document).attr("title", "CommandJam | " + $(xml).find("name").text());
    $(".pagenametext").text($(xml).find("name").text());
    $(".commandbox").text($(xml).find("command").text());
    $(".codeclaim").hide();
}