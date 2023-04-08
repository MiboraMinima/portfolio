$(document).ready(
  function () {
    // Legend
    $("#plot-nitrate").hover(function () {
      // Display the to-show element when the hoverable element is hovered over
      $('#legend-nitrate').show();
    }, function () {
      // Hide the to-show element when the hoverable element is no longer being hovered over
      $('#legend-nitrate').hide();
    });
    $("#phare-aix").hover(function () {
      $('#legend-phare').show();
    }, function () {
      $('#legend-phare').hide();
    });
    $("#mnt-daoulas").hover(function () {
      $('#legend-mnt-daoulas').show();
    }, function () {
      $('#legend-mnt-daoulas').hide();
    });
    $("#crozon-route").hover(function () {
      $('#legend-crozon').show();
    }, function () {
      $('#legend-crozon').hide();
    });
    $("#dev-script").hover(function () {
      $('#legend-code').show();
    }, function () {
      $('#legend-code').hide();
    });
    $("#etang_photo").hover(function () {
      $('#legend-etang').show();
    }, function () {
      $('#legend-etang').hide();
    });
    $("#garde_mono").hover(function () {
      $('#legend-mono').show();
    }, function () {
      $('#legend-mono').hide();
    });


    // Inner slide Curnic modélisation
    $("#signal-mod div a[href^='#']").click(function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $(target).show().siblings(".signal-mod-div").hide();
    });

    // slide exemple 
    $("div.content-top-example h4 a[href^='#']").click(function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $(target).show().siblings(".content-bottom-example").hide();
      $(this).addClass("underline").siblings().removeClass("underline");
    });

    // slide exemple inner slide
    $(".trait-div-slide-button a[href^='#']").click(function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $(target).show().siblings(".trait-slide-contain").hide();
    });


    // ZOOM ON IMAGES
    $("#poster-curnic").zoom({
      magnify: 0.30,
      duration: 100
    });

    $("#finis-sub-alti, #zones-nmr, #dev-alea-fig,#daoulas-sub-carto").zoom({
      magnify: 0.4,
      duration: 500
    });
});