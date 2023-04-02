$(document).ready(
    function () {
        // arrow-nav
        $('nav ul li').hover(function(e) {
            e.stopPropagation(); // empêche la propagation de l'événement
            $(this).find("span.arrow-nav").addClass("down");
        }, function(){
            $(this).find("span.arrow-nav").removeClass("down");
        });

        $('nav ul li').click(function (e) {
            e.stopPropagation(); // empêche la propagation de l'événement
            
            $("nav ul li span.arrow-nav").not($(this)).removeClass("clicked");
            $(this).find("span.arrow-nav").addClass("clicked");

            $(".arrow-sub-nav").removeClass("clicked");
        });

        // arrow-sub-nav
        $('ul.dropdown-content li').hover(function (e) {
            e.stopPropagation(); // empêche la propagation de l'événement
            $(this).find("span.arrow-sub-nav").addClass("down");
        }, function(){
            $(this).find("span.arrow-sub-nav").removeClass("down");
        });

        $('ul.dropdown-content li').click(function (e) {
            e.stopPropagation(); // empêche la propagation de l'événement
            $("ul.dropdown-content li span.arrow-sub-nav").not($(this)).removeClass("clicked");
            $(this).find("span.arrow-sub-nav").addClass("clicked");
        });
});

// arrow-item
$(document).ready(function () {
    $('.dropdown-content ul.ul-proj li').hover(function () {
        $('.dropdown-content ul.ul-proj li .arrow-item-sub').not($(this)).removeClass("black");
        $(this).find('.arrow-item-sub').addClass("black");
    }, function() {
        $(this).find('.arrow-item-sub').removeClass("black");
    });
    
    $('.dropdown-content li').hover(function () {
        $('.dropdown-content li .arrow-item').not($(this)).hide();
        $(this).find('.arrow-item').show();
    }, function() {
        $(this).find('.arrow-item').hide();
    });
});
