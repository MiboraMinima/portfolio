// Down circle
$(document).ready(function () {
    anime({
        targets: '#circle1',
        translateY: '120vh',
        duration: 13000,
        easing: 'linear',
        delay: 1000,
        loop: true
    });
    anime({
        targets: '#circle2',
        translateY: '120vh',
        duration: 13000,
        easing: 'linear',
        delay: 7000,
        loop: true
    });
    anime({
        targets: '#circle3',
        translateY: '120vh',
        duration: 13000,
        easing: 'linear',
        delay: 2000,
        loop: true
    });
    anime({
        targets: '#circle4',
        translateY: '120vh',
        duration: 13000,
        easing: 'linear',
        delay: 5000,
        loop: true
    });
    anime({
        targets: '#circle5',
        translateY: '120vh',
        duration: 13000,
        easing: 'linear',
        delay: 12000,
        loop: true
    });
})

// Move tdc
$(document).ready(function () {
    $('#id-tdc polygon').mouseenter(function () { 
        anime({
            targets: "#id-tdc polygon",
            autoplay: true,
            points: [
                
                {value: ".65 158.73 20.01 84.69 63.92 56.09 129.8 47.92 174.22 73.45 250.82 89.79 333.46 84.09 385.12 58.13 415.24 35.16 429.03 10.13 442 4.09 460.65 .6 460.65 158.73 .65 158.73"},
                {value: ".92 159.17 37.14 103.81 79.01 85.12 133.65 74.91 177.05 56.02 247.01 32.53 313.9 45.29 385.39 77.98 416.54 57.04 430.73 37.54 440.03 17.72 460.92 1.04 460.92 159.17 .92 159.17"}
            ],
            easing: "easeInOutSine",
            duration: 5000,
            direction: "alternate",
            loop: false,
            delay:0
        });
    });
});

// Text in data
$(document).ready(function () {
    anime({
        autoplay: true,
        targets: '.data-circle',
        shapeOutside: 'circle(48%)',
        easing: 'easeInOutQuad',
        duration: 5000,
        direction: 'alternate',
        loop: true
    });

    anime({
        autoplay: true,
        targets: '.data-circle2',
        shapeOutside: 'circle(48%)',
        easing: 'easeInOutQuad',
        duration: 5000,
        direction: 'alternate',
        loop: true
    });
});

// grid anime
$(document).ready(function () {
    let ny = 10;    //rows
    let nx = 25;    //columns

    //Get the container element
    let container = document.querySelector('#div-grid');
    for (let i=0; i<ny*nx; i++){
        //Create box
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        //Add box to container's child list
        container.appendChild(box);
    }

    $('.content-stage .container-base h3 a').click(function (e) { 
        e.preventDefault();

        // anime({
        //     // autoplay: true,
        //     direction: 'alternate',
        //     // loop:true,
        //     targets: '.box',
        //     // scale: ['100%', '50%'],
        //     translateX: anime.stagger(7, {grid: [nx, ny], from: 'center', axis: 'x'}),
        //     translateY: anime.stagger(7, {grid: [nx, ny], from: 'center', axis: 'y'}),
        //     rotateZ: anime.stagger([0, 90], {grid: [nx, ny], from: 'center', axis: 'x'}),
        //     delay: anime.stagger(100, {grid: [nx, ny],  from: 'center'})
        // });

        anime({
            targets: '.box',
            scale: [
                {value: .1, easing: 'easeOutSine', duration: 500},
                {value: 1, easing: 'easeInOutQuad', duration: 1200}
              ],
            delay: anime.stagger(100, {grid: [nx, ny],  from: 'center'})
        });

    });


    ///////////////////////////////////////////////////////////
    // Anime gallery
    // api
    var tl2 = anime.timeline({
        autoplay:true,
        loop:true
    });

    tl2
    .add({
        targets: 'div#api-1',
        translateY: '15vw',
        duration: 3000,
        easing: 'linear',
    })
    .add({
        targets: 'div#sql-1',
        translateX: '15vw',
        delay:500,
        duration: 3000,
        easing: 'linear',
        background: '#FFF'
    })
    .add({
        targets:"div.fallen",
        translateY: "25%",
        duration:3000,
        easing: "easeOutBack"
    })
    .add({
        targets: 'div#api-2',
        translateY: '15vw',
        duration: 3000,
        easing: 'linear',
    })
    .add({
        targets: 'div#sql-2',
        translateX: '15vw',
        duration: 3000,
        easing: 'linear',
        background: '#FFF',
        delay:500
    })
    .add({
        targets:"div.fallen",
        translateY: "50%",
        duration:3000,
        easing: "easeOutBack"
    })
    .add({
        targets: 'div#api-3',
        translateY: '15vw',
        duration: 3000,
        easing: 'linear',
    })
    .add({
        targets: 'div#sql-3',
        translateX: '15vw',
        duration: 3000,
        easing: 'linear',
        background: '#FFF',
        delay:500
    })
    .add({
        targets:"div.fallen",
        translateY: "75%",
        duration:3000,
        easing: "easeOutBack"
    })
    .add({
        targets: 'div#api-4',
        translateY: '15vw',
        duration: 3000,
        easing: 'linear',
    })
    .add({
        targets: 'div#sql-4',
        translateX: '15vw',
        duration: 3000,
        easing: 'linear',
        background: '#FFF',
        delay:500
    })
    .add({
        targets:"div.fallen",
        translateY: "100%",
        duration:3000,
        easing: "easeOutBack"
    });

    // animate graph style of the div
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
        easing: 'easeOutBack',
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
        easing: 'easeInExpo',
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
        easing: 'easeInElastic',
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