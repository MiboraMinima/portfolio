$(document).ready(function () {

    $("#qgis").show();

    $(".list-comp p a[href^='#']").click(function(e) {
        e.preventDefault();
    
        // Remove classes from all similar a and div elements
        $(".list-comp a").removeClass("text-color");
        $(".list-comp div").removeClass("div-color");
    
        var target = $(this).attr("href");
        $(target).show().siblings(".comp-detail-item").hide();
    
        // Add classes to the clicked a and its parent div
        $(this).addClass("text-color");
        $(this).parent().parent().addClass("div-color");
    });

    // block change to green
    $(".comp-other").hover(function () {
        $(this).addClass("change-comp-other")
    }, function () {
        $(this).removeClass("change-comp-other")
    });
});
