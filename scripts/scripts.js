// SCRIPTS NAV

$(document).ready(function () {
    ////////////////////////////////////////////////////////////////////////////
    // NAV
    $('nav ul li.dropdown').click(function (e) {
        e.stopPropagation(); // empêche la propagation de l'événement

        var targetHeight = $('.sub-aside').height() - ($(this).height() * 3); // récupère la hauteur de la div cible
        $('.desc').slideUp();
        $('nav ul li ul').not($(this)).slideUp();

        $(this).children('ul').slideToggle().css('height', targetHeight);
    });

    $('nav ul li ul.dropdown-content li').click(function (e) {
        e.stopPropagation();

        $('nav ul li ul.dropdown-content li ul').not($(this)).slideUp();
        $(this).children('ul').slideToggle();
    });
    
    // Tout remettre par défaut quand on clique sur le titre
    $('div.titre').click(function () {
        $('.arrow-nav, .arrow-item').removeClass('clicked');
        $('.desc').prependTo(".sub-aside");
        $('.desc').slideDown();
        $('nav ul li ul').slideUp();
    });


    ///////////////////////////////////////////////////////////////////////
    // DISPLAY PAGES

    // Proj
    $('a#id-aix').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show(); 
    });
    $('a#id-home').click(function (e) {
        e.preventDefault(); 

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show(); 
    });
    $('a#id-stage-l3').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show(); 
    });
    $('a#id-mono-da').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show();
    });
    $('a#id-etang-curnic').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show(); 
    });
    $('a#id-dpt-routes').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();


        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show(); 

    });
    $('a#id-api').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide(); 
        $(target).show(); 
    });

    // Slider
    $('a#id-slider-div-carto').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href');
        $('.content, .swiper-container').hide();
        $(target).show();
    });

    $('a#id-slider-div-autre').click(function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        var target = $(this).attr('href');
        $('.content, .swiper-container').hide();
        $(target).show();
    });


    // Info
    $('a#id-cv').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var target = $(this).attr('href');
        $('.content, .swiper-container').hide();
        $(target).show();
    });

    $('a#id-comp').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide();
        $(target).show();
    });

    $('a#id-ailleurs').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var target = $(this).attr('href'); 
        $('.content, .swiper-container').hide();
        $(target).show();
    });
});
