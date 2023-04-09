$(document).ready(function () {
    
    //////////////////////////////////////////////////////////////////////////////////////////
    // SLIDER CARTO
    var $slider = $('#slider-div-carto div#slider-carto');
    var $sliderDiv = $('#slider-div-carto');
    var $sliderUl = $slider.find('ul');
    var $sliderLi = $sliderUl.find('li');

    var $sliderDivDesc = $sliderDiv.find('#slider-caption');
    var $sliderDivSubDesc = $sliderDivDesc.find('#slider-caption-sub');
    var $sliderDesc = $sliderDiv.find('.desc-slider');

    var $prevButton = $sliderDiv.find('.prev');
    var $nextButton = $sliderDiv.find('.next');

    var slides = $sliderLi.toArray();
    var desc = $sliderDesc.toArray();

    console.log(desc);
    console.log(slides);

    var currentIndex = 0;

    // Affiche le premier élément de la liste par défaut
    $sliderUl.append(slides[currentIndex]-1); // -1 par ce que quand on clique sur le li des data-viz ça saute un index
    $sliderDivSubDesc.append(desc[currentIndex]); // -1 par ce que quand on clique sur le li des data-viz ça saute un index

    // Affiche le slider lorsque la page est prête
    $sliderDivDesc.show();

    // Affiche l'élément précédent lorsque le bouton "Précédent" est cliqué
    $prevButton.click(function () {
        $sliderUl.empty();
        $sliderDivSubDesc.empty();

        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        $sliderUl.append(slides[currentIndex]);
        $sliderDivSubDesc.append(desc[currentIndex]);
    });

    // Affiche l'élément suivant lorsque le bouton "Suivant" est cliqué
    $nextButton.click(function () {
        $sliderUl.empty();
        $sliderDivSubDesc.empty();

        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        $sliderUl.append(slides[currentIndex]);
        $sliderDivSubDesc.append(desc[currentIndex]);
    });

    //////////////////////////////////////////////////////////////////////////////////////////    
    // SLIDER OTHER
    var $slider2 = $('#slider-div-autre div#slider-carto');
    var $sliderDiv2 = $('#slider-div-autre');
    var $sliderUl2 = $slider2.find('ul');
    var $sliderLi2 = $sliderUl2.find('li');

    var $sliderDivDesc2 = $sliderDiv2.find('#slider-caption');
    var $sliderDivSubDesc2 = $sliderDivDesc2.find('#slider-caption-sub');
    var $sliderDesc2 = $sliderDiv2.find('.desc-slider');

    var $prevButton2 = $sliderDiv2.find('.prev');
    var $nextButton2 = $sliderDiv2.find('.next');

    var slides2 = $sliderLi2.toArray();
    var desc2 = $sliderDesc2.toArray();

    console.log(desc2);
    console.log(slides2);

    var currentIndex2 = 0;

    // Affiche le premier élément de la liste par défaut
    $sliderUl2.append(slides2[currentIndex2]-1); // -1 par ce que quand on clique sur le li des data-viz ça saute un index
    $sliderDivSubDesc2.append(desc2[currentIndex2]); // -1 par ce que quand on clique sur le li des data-viz ça saute un index

    // Affiche le slider lorsque la page est prête
    $sliderDivDesc2.show();

    // Affiche l'élément précédent lorsque le bouton "Précédent" est cliqué
    $prevButton2.click(function () {
        $sliderUl2.empty();
        $sliderDivSubDesc2.empty();

        currentIndex2--;
        if (currentIndex2 < 0) {
            currentIndex2 = slides2.length - 1;
        }
        $sliderUl2.append(slides2[currentIndex2]);
        $sliderDivSubDesc2.append(desc2[currentIndex2]);
    });


    // Affiche l'élément suivant lorsque le bouton "Suivant" est cliqué
    $nextButton2.click(function () {
        $sliderUl2.empty();
        $sliderDivSubDesc2.empty();

        currentIndex2++;
        if (currentIndex2 >= slides2.length) {
            currentIndex2 = 0;
        }
        $sliderUl2.append(slides2[currentIndex2]);
        $sliderDivSubDesc2.append(desc2[currentIndex2]);
    });
});
