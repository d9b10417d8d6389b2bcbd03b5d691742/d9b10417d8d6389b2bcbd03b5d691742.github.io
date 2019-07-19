/*Script of commandjam.tk
Copyright © 2019 CommandJam - All Rights Reserved*/
$(function () {
    var URLtag = window.location.search.substring(1).split("=");
    if (URLtag[0] == "id") {
        $.ajax({
            type: "GET",
            url: "xml/" + URLtag[1] + ".xml",
            success: dataLoader,
            error: notLoaded
        });
    } else {
        notLoaded();
    }
});

function dataLoader(xml) {
    $(document).attr("title", "CommandJam | " + $(xml).find("name").text());
    $('meta[itemprop="name"]').attr('content', "CommandJam | " + $(xml).find("name").text());
    $('meta[property="og:title"]').attr('content', "CommandJam | " + $(xml).find("name").text());
    $('meta[name="twitter:title"]').attr('content', "CommandJam | " + $(xml).find("name").text());
    $('meta[name="description"]').attr('content', $(xml).find("metadescription").text());
    $('meta[itemprop="description"]').attr('content', $(xml).find("metadescription").text());
    $('meta[property="og:description"]').attr('content', $(xml).find("metadescription").text());
    $('meta[name="twitter:description"]').attr('content', $(xml).find("metadescription").text());
    $(".pagenametext").text($(xml).find("name").text());
    $(".commandbox").text($(xml).find("command").text());
    $(".ivideo").children().attr("src", "https://www.youtube-nocookie.com/embed/" + $(xml).find("videourl").text() + "?modestbranding=1&showinfo=0&rel=0&fs=0&color=white&disablekb=1");
    $(".ooctitle").text($(xml).find("name").text() + "in Minecraft" + $(xml).find("version").text() + "!");
    $(".oocdesc").html($(xml).find("description").html());
    $(".truefalselist").children().eq(0).children().text("Works in " + $(xml).find("version").text());
    $(xml).find("true").each(function () {
        $(".truefalselist").append('<li class="litrue"><span>' + $(this).text() + '</span></li>');
    });
    $(xml).find("false").each(function () {
        $(".truefalselist").append('<li class="lifalse"><span>' + $(this).text() + '</span></li>');
    });
    $(".allcontent").show();
    $(".spinner2").remove();
};

function notLoaded() {
    OpenPage('creations')
    Warn("There is no project: ");
}
