/* DISPLAY INFOs IN THE SIDE BAR ON HOVER */
$(document).ready(function () {
  
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    sliderPerView: 1,
    allowTouchMove: false,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    },
    on: {
      slideChange: function () {
        // Get the active slide index
        const activeIndex = this.activeIndex;

        // Check if the active slide has an ID of slide1
        if (document.querySelectorAll('.swiper-slide')[activeIndex].id === 'slide1') {
          // Your JavaScript code for slide 1 goes here
          anime({
            autoplay: true,
            direction: 'alternate',
            // loop:true,
            targets: '.box',
            // scale: ['100%', '50%'],
            translateX: anime.stagger(7, {grid: [nx, ny], from: 'center', axis: 'x'}),
            translateY: anime.stagger(7, {grid: [nx, ny], from: 'center', axis: 'y'}),
            rotateZ: anime.stagger([0, 90], {grid: [nx, ny], from: 'center', axis: 'x'}),
            delay: anime.stagger(100, {grid: [nx, ny],  from: 'center'})
          });
        }
      }
    }
  }); 

  // Hide the to-show element by default
  $('.desc-form').hide(); // Descriptions in bande
  $('.desc-form-1').hide(); // Descriptions in bande
  $('#grid-trav').hide(); // Grid travail saisonnier
  
  // Add a hover event listener to the hoverable element


  $('#grid-item-1').hover(function() {
    // Display the to-show element when the hoverable element is hovered over
    $('#desc-egel').show();
    $('.animate-container').hide();
    $(this).css('color', '#007478');
  }, function() {
    // Hide the to-show element when the hoverable element is no longer being hovered over
    $('#desc-egel').hide();
    $('.animate-container').show();
    $(this).css('color', 'black');
  });

  $('#grid-item-2').hover(function() {
      $('#desc-lic').show();
      $(this).css('color', '#007478');
      $('.animate-container').hide();
    }, function() {
      $('#desc-lic').hide();
      $(this).css('color', 'black');
      $('.animate-container').show();
    });

  $('#grid-item-3').hover(function() {
    $('#desc-tmd').show();
    $(this).css('color', '#007478');
    $('.animate-container').hide();
  }, function() {
    $('#desc-tmd').hide();
    $(this).css('color', 'black');
    $('.animate-container').show();
  });

  // STAGE
  $('#grid-hydro').hover(function() {
    $('#desc-hydro').show();
    $(this).css('color', '#007478');
  }, function() {
    $('#desc-hydro').hide();
    $(this).css('color', 'black');
  });

  $('#grid-curnic').hover(function() {
      $('#desc-curnic').show();
      $(this).css('color', '#007478');
    }, function() {
      $('#desc-curnic').hide();
      $(this).css('color', 'black');
    });

    $('#grid-l3').hover(function() {
      $('#desc-l3').show();
      $(this).css('color', '#007478');
    }, function() {
      $('#desc-l3').hide();
      $(this).css('color', 'black');
    });

    // TRAVAIL
    $('#grid-rade').hover(function() {
      $('#desc-rade').show();
      $(this).css('color', '#007478');
    }, function() {
      $('#desc-rade').hide();
      $(this).css('color', 'black');
    });

    $('#grid-dech').hover(function() {
      $('#desc-dech').show();
      $(this).css('color', '#007478');
    }, function() {
      $('#desc-dech').hide();
      $(this).css('color', 'black');
    });
});

$(document).ready(function () {
  // Pass from stage to travail
  $('a#id-grid-stage').click(function () {
    $('#grid-trav').hide();
    $('#grid-stage').show(); 

    $("#id-grid-stage").addClass("underline");
    $("#id-grid-trav").removeClass("underline");
  });

  $('a#id-grid-trav').click(function () {
    $('#grid-stage').hide();
    $('#grid-trav').show(); 

    $("#id-grid-trav").addClass("underline");
    $("#id-grid-stage").removeClass("underline");
  });
});

// Par ailleurs
$(document).ready(function () {
  $('#id-cet').hover(function() {
    $('#cet').show();
  }, function() {
    $('#cet').hide();
  });

  $('#id-zbeul').hover(function() {
    $('#zbeul').show();
  }, function() {
    $('#zbeul').hide();
  });

  $('a#id-twi').hover(function() {
    $('#twi').show();
  }, function() {
    $('#twi').hide();
  });

  $('a#id-spoti').hover(function() {
    $('#spoti').show();
  }, function() {
    $('#spoti').hide();
  });

  $('#id-litt').hover(function() {
    $('#litt').show();
  }, function() {
    $('#litt').hide();
  });
});