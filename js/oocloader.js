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
    $(".ivideo").children().attr("src", "https://www.youtube-nocookie.com/embed/" + $(xml).find("videourl").text() + "?modestbranding=1&showinfo=0&rel=0&fs=0&color=white&disablekb=1");
    $(".ooctitle").text($(xml).find("name").text() + "in Minecraft" + $(xml).find("version").text() + "!");
    $(".oocdesc").text($(xml).find("description").text());
};
