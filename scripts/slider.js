//SLIDER CARTO
$(document).ready(function () {
    // Slider cart
    $('#id-slider-div-carto').click( function (e) {
        e.preventDefault();

        var $slider = $('#slider-div-carto div#slider-carto');
        var $sliderDiv = $('#slider-div-carto');
        var $sliderUl = $slider.find('ul');
        var $sliderLi = $sliderUl.find('li');

        var $sliderDivDesc = $sliderDiv.find('#slider-caption');
        var $sliderDivSubDesc = $sliderDivDesc.find('#slider-caption-sub');
        var $sliderDesc = $sliderDiv.find('.desc-slider');

        var $nav = $('#li-proj');
        var $navLinks = $nav.find('a');
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

        // Met en surbrillance le lien de la barre de navigation correspondant à l'élément courant
        $navLinks.eq(currentIndex).addClass('highlight');

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
            $navLinks.removeClass('highlight');
            $navLinks.eq(currentIndex).addClass('highlight');
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
            $navLinks.removeClass('highlight');
            $navLinks.eq(currentIndex).addClass('highlight');
        });

        // Suivant depuis la nav
        $navLinks.click(function (event) {
            event.preventDefault();
            event.stopPropagation();

            var clickedIndex = $(this).index();
            $sliderUl.empty();
            $sliderDivSubDesc.empty();
            
            currentIndex = clickedIndex;
            $sliderUl.append(slides[currentIndex]);
            $sliderDivSubDesc.append(desc[currentIndex]);
            $navLinks.removeClass('highlight');
            $navLinks.eq(currentIndex).addClass('highlight');
        });
    });

    // Slider autre
    $('#id-slider-div-autre').click( function (e) {
        e.preventDefault();

        var $slider = $('#slider-div-autre div#slider-carto');
        var $sliderDiv = $('#slider-div-autre');
        var $sliderUl = $slider.find('ul');
        var $sliderLi = $sliderUl.find('li');

        var $sliderDivDesc = $sliderDiv.find('#slider-caption');
        var $sliderDivSubDesc = $sliderDivDesc.find('#slider-caption-sub');
        var $sliderDesc = $sliderDiv.find('.desc-slider');

        var $nav = $('#li-proj');
        var $navLinks = $nav.find('a');
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
        // $sliderDiv.show();
        $sliderDivDesc.show();

        // Met en surbrillance le lien de la barre de navigation correspondant à l'élément courant
        $navLinks.eq(currentIndex).addClass('highlight');

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
            $navLinks.removeClass('highlight');
            $navLinks.eq(currentIndex).addClass('highlight');
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
            $navLinks.removeClass('highlight');
            $navLinks.eq(currentIndex).addClass('highlight');
        });


        // Suivant depuis la nav
        $navLinks.click(function (event) {
            event.preventDefault();
            event.stopPropagation();

            var clickedIndex = $(this).index();
            $sliderUl.empty();
            $sliderDivSubDesc.empty();
            
            currentIndex = clickedIndex;
            $sliderUl.append(slides[currentIndex]);
            $sliderDivSubDesc.append(desc[currentIndex]);
            $navLinks.removeClass('highlight');
            $navLinks.eq(currentIndex).addClass('highlight');
        });
    });
});
