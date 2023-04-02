// Menu
$(document).ready(
    function () {
        $('nav ul li.dropdown').click(function (e) {
            e.stopPropagation(); // empêche la propagation de l'événement

            var targetHeight = $('.sub-aside').height() - ($(this).height() * 3); // récupère la hauteur de la div cible
            $('.desc').slideUp();
            $('nav ul li ul').not($(this)).slideUp();

            $(this).children('ul').slideToggle().css('height', targetHeight);
        });

        $('nav ul li ul.dropdown-content li').click(function (e) {
            e.stopPropagation(); // empêche la propagation de l'événement

            $('nav ul li ul.dropdown-content li ul').not($(this)).slideUp();
            $(this).children('ul').slideToggle();
        });

    });

// Tout remettre par défaut quand on clique sur le titre
$(document).ready(
    function () {
        $('div.titre').click(function () {
            $('.arrow-nav').removeClass('clicked');
            $('.desc').prependTo(".sub-aside");
            $('.desc').slideDown();
            $('nav ul li ul').slideUp();
        });
    });


// Lien vers les pages
$(document).ready(
    function () {
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
    });


// Link Information
$(document).ready(function () {
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

// FORMATIONS
$(document).ready(function () {
    // déplace la flèche vers le bas lorsque l'utilisateur passe la souris sur l'élément
    $('#container-info').mouseenter(function () { 
        $('#container-stage').hide();
    });
    $('#container-info').mouseleave(function () { 
        $('#container-stage').show();
    });

    $('#container-stage').mouseenter(function () { 
        $('#container-info').hide();
    });
    $('#container-stage').mouseleave(function () { 
        $('#container-info').show();
    });
});
