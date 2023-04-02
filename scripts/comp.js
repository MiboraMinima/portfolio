$(document).ready(function () {
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

    $(".comp-other").hover(function () {
        $(this).addClass("change-comp-other")
    }, function () {
        $(this).removeClass("change-comp-other")
    });

    // animate the width of the div
    var tl1 = anime.timeline({
        autoplay:true,
        loop:true
    });

    tl1
    .add({
        targets:'#bar-1',
        width: '300px',
        easing: 'easeInOutQuad',
        duration: 2000
    })
    .add({
        targets:'#bar-1',
        width: '700px',
        easing: 'easeOutBounce',
        duration:1500
    })
    .add({
        targets:'#bar-1',
        width: '0px',
        easing: 'easeOutQuad',
        duration:500
    })

    // animate the width of the div
    var tl2 = anime.timeline({
        autoplay:true,
        loop:true
    });

    tl2
    .add({
        targets:'#bar-2',
        width: '775px',
        easing: 'easeInQuad',
        duration: 2000,
        delay:2000
    })
    .add({
        targets:'#bar-2',
        width: '400px',
        easing: 'easeOutBounce',
        duration:1500
    })
    .add({
        targets:'#bar-2',
        width: '600px',
        easing: 'easeInCubic',
        duration:500
    })
    .add({
        targets:'#bar-2',
        width: '0px',
        easing: 'easeInCubic',
        duration:750
    });

    // BAR 3
    var tl3 = anime.timeline({
        autoplay:true,
        loop:true
    });

    tl3
    .add({
        targets:'#bar-3',
        width: '100px',
        easing: 'easeInOutQuad',
        duration: 2000
    })
    .add({
        targets:'#bar-3',
        width: '800px',
        easing: 'easeOutBounce',
        duration:1500
    })
    .add({
        delay:2000,
        targets:'#bar-3',
        width: '0px',
        easing: 'easeOutQuad',
        duration:500
    })

    // BAR 4 
    var tl4 = anime.timeline({
        autoplay:true,
        loop:true
    });

    tl4
    .add({
        targets:'#bar-4',
        width: '800px',
        easing: 'easeInOutQuad',
        duration: 5000
    })
    .add({
        targets:'#bar-4',
        width: '250px',
        easing: 'easeOutBounce',
        duration:1500
    })
    .add({
        targets:'#bar-4',
        width: '500px',
        easing: 'easeOutElastic',
        duration:3000
    })
    .add({
        targets:'#bar-4',
        width: '200px',
        easing: 'easeInOutCubic',
        duration:500
    })
    .add({
        targets:'#bar-4',
        width: '0px',
        easing: 'easeOutQuad',
        duration:1500
    });


});
