$(function() {
    var URLtag = window.location.search.substring(1).split("=");
    if (URLtag[0] == "") {
        $.ajax({
            type: "GET",
            url: "xml/" + URLtag[1] + ".xml",
            success: dataLoader,
            error: notLoaded
        });
    }
});

function dataLoader (xml) {
    $(document).attr("title", "CommandJam | " + $(xml).find("name").text());
    $(".pagenametext").text($(xml).find("name").text());
    $(".commandbox").text($(xml).find("command").text());
    $(".codeclaim").hide();
    $(".help").hide();
    $(".ivideo").children().attr("src", "https://www.youtube-nocookie.com/embed/" + $(xml).find("videourl").text() + "?modestbranding=1&showinfo=0&rel=0&fs=0&color=white&disablekb=1");
    $(".ooctitle").text($(xml).find("name").text() + "in Minecraft" + $(xml).find("version").text() + "!");
    $(".oocdesc").text($(xml).find("description").text());
    
    $(".truefalselist").children().eq(0).children().text("Works in " + $(xml).find("version").text());
    
    $(xml).find("true").each(function() {
        $(".truefalselist").append('<li class="litrue"><span>' + $(this).text() + '</span></li>');
        
    });
    $(xml).find("false").each(function() {
        $(".truefalselist").append('<li class="lifalse"><span>' + $(this).text() + '</span></li>');
    });
    
};

function notLoaded () {
    OpenPage('404')
}