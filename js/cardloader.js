$(function() {
    $.ajax({
            type: "GET",
            url: "xml/main.xml",
            success: mainLoader
    });
});

function mainLoader (basexml) {
    $(basexml).find("xmlname").each(function() {
        $.ajax({
            type: "GET",
            url: "xml/" + $(this).text() + ".xml",
            success: function(xml) {
            $(".cardwrapper").append('<div class="card" onclick="OpenPage(\'creation?id=' + $(xml).find("filename").text() + '\')"><div class="cardimgbox" version="' + $(xml).find("version").text() + '"><img src="https://img.youtube.com/vi/' + $(xml).find("videourl").text() + '/hqdefault.jpg"></div><h2>' + $(xml).find("name").text() + '</h2></div>');
}

        });
    });
    $(".spinner").remove();
};    

