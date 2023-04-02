$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var bgImageUrl = img.style.backgroundImage;
    var urlRegex = /^url\((['"])?(.*)\1\)$/;
    var matches = bgImageUrl.match(urlRegex);
    // var urlImg = matches && matches[2];

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = matches && matches[2];
        captionText.innerHTML = 'les chevaux';
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("close1");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
});




$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById("myModal2");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg2");
    var modalImg = document.getElementById("img02");
    var captionText = document.getElementById("caption2");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("close2");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
});