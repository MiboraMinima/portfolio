// TASMAN
$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById("tasmanModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("tasmanImg");
    var modalImg = document.getElementById("tasmanImgModal");
    
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("tasmanClose");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
    
    // Get the image and button elements
    var wrapper = document.getElementById("tasmanWrapper");
    var image = document.getElementById("tasmanImgModal");
    var zoomInButton = document.getElementById("tasmanZoom-in");
    var zoomOutButton = document.getElementById("tasmanZoom-out");

    // Set the initial zoom level
    var zoom = 1;

    // Bind a click event listener to the zoom in button
    zoomInButton.addEventListener("click", function (event) {
        // Prevent the default button behavior
        event.preventDefault();

        // Increase the zoom level
        zoom += 1;

        // Update the image scale
        image.style.transform = "scale(" + zoom + ")";

        // Calculate the horizontal and vertical scroll position to center the image
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        // Set the scroll position of the wrapper element
        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;

    });


    // Bind a click event listener to the zoom out button
    zoomOutButton.addEventListener("click", function (event) {
        // Prevent the default button behavior
        event.preventDefault();

        // Decrease the zoom level
        zoom -= 1;

        // Update the image scale
        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        // Set the scroll position of the wrapper element
        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

///////////////////////////////////////////////////////////////////////////
// DAOULAS
$(document).ready(function () {
    // Get the image and button elements
    var wrapper = document.getElementById("daoulasWrapper");
    var image = document.getElementById("daoulasImgModal");
    var zoomInButton = document.getElementById("daoulasZoom-in");
    var zoomOutButton = document.getElementById("daoulasZoom-out");

    // Set the initial zoom level
    var zoom = 1;

    // Bind a click event listener to the zoom in button
    zoomInButton.addEventListener("click", function (event) {
        // Prevent the default button behavior
        event.preventDefault();

        // Increase the zoom level
        zoom += 1;

        // Update the image scale
        image.style.transform = "scale(" + zoom + ")";

        // Calculate the horizontal and vertical scroll position to center the image
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        // Set the scroll position of the wrapper element
        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });


    // Bind a click event listener to the zoom out button
    zoomOutButton.addEventListener("click", function (event) {
        // Prevent the default button behavior
        event.preventDefault();

        // Decrease the zoom level
        zoom -= 1;

        // Update the image scale
        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        // Set the scroll position of the wrapper element
        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById("daoulasModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("daoulasImg");
    var modalImg = document.getElementById("daoulasImgModal");
    // var captionText = document.getElementById("caption2");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        // captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("daoulasClose");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
});


/////////////////////////////////////////////////////////////////////////////////////
// BATHY
$(document).ready(function () {
    var wrapper = document.getElementById("bathyWrapper");
    var image = document.getElementById("bathyImgModal");
    var zoomInButton = document.getElementById("bathyZoom-in");
    var zoomOutButton = document.getElementById("bathyZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    var modal = document.getElementById("bathyModal");

    var img = document.getElementById("bathyImg");
    var modalImg = document.getElementById("bathyImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("bathyClose");

    span.onclick = function () {
        modal.style.display = "none";
    };
});


/////////////////////////////////////////////////////////////////////////////////////
// rade
$(document).ready(function () {
    var wrapper = document.getElementById("radeWrapper");
    var image = document.getElementById("radeImgModal");
    var zoomInButton = document.getElementById("radeZoom-in");
    var zoomOutButton = document.getElementById("radeZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    var modal = document.getElementById("radeModal");

    var img = document.getElementById("radeImg");
    var modalImg = document.getElementById("radeImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("radeClose");

    span.onclick = function () {
        modal.style.display = "none";
    };
});



/////////////////////////////////////////////////////////////////////////////////////
// platier
$(document).ready(function () {
    var wrapper = document.getElementById("platierWrapper");
    var image = document.getElementById("platierImgModal");
    var zoomInButton = document.getElementById("platierZoom-in");
    var zoomOutButton = document.getElementById("platierZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    var modal = document.getElementById("platierModal");

    var img = document.getElementById("platierImg");
    var modalImg = document.getElementById("platierImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("platierClose");

    span.onclick = function () {
        modal.style.display = "none";
    };
});

/////////////////////////////////////////////////////////////////////////////////////
// Daoulas MNT
$(document).ready(function () {
    var wrapper = document.getElementById("damntWrapper");
    var image = document.getElementById("damntImgModal");
    var zoomInButton = document.getElementById("damntZoom-in");
    var zoomOutButton = document.getElementById("damntZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    var modal = document.getElementById("damntModal");

    var img = document.getElementById("damntImg");
    var modalImg = document.getElementById("damntImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("damntClose");

    span.onclick = function () {
        modal.style.display = "none";
    };
});


/////////////////////////////////////////////////////////////////////////////////////
// Daoulas MNT
$(document).ready(function () {
    var wrapper = document.getElementById("posterWrapper");
    var image = document.getElementById("posterImgModal");
    var zoomInButton = document.getElementById("posterZoom-in");
    var zoomOutButton = document.getElementById("posterZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    var modal = document.getElementById("posterModal");

    var img = document.getElementById("posterImg");
    var modalImg = document.getElementById("posterImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("posterClose");

    span.onclick = function () {
        modal.style.display = "none";
    };
});


/////////////////////////////////////////////////////////////////////////////////////
// Contrat
$(document).ready(function () {
    var wrapper = document.getElementById("contratWrapper");
    var image = document.getElementById("contratImgModal");
    var zoomInButton = document.getElementById("contratZoom-in");
    var zoomOutButton = document.getElementById("contratZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    var modal = document.getElementById("contratModal");

    var img = document.getElementById("contratImg");
    var modalImg = document.getElementById("contratImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("contratClose");

    span.onclick = function () {
        modal.style.display = "none";
    };

});


/////////////////////////////////////////////////////////////////////////////////////
// DoD
$(document).ready(function () {
    var wrapper = document.getElementById("dodWrapper");
    var image = document.getElementById("dodImgModal");
    var zoomInButton = document.getElementById("dodZoom-in");
    var zoomOutButton = document.getElementById("dodZoom-out");

    var zoom = 1;

    zoomInButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom += 1;

        image.style.transform = "scale(" + zoom + ")";

        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });

    zoomOutButton.addEventListener("click", function (event) {
        event.preventDefault();

        zoom -= 1;

        image.style.transform = "scale(" + zoom + ")";
        
        var scale = zoom; // Récupère la valeur de zoom actuelle
        var scrollX = (image.offsetWidth - wrapper.offsetWidth / 2) * (scale-1);
        var scrollY = (image.offsetHeight - wrapper.offsetHeight / 2) * (scale-1);

        wrapper.scrollTop = scrollY;
        wrapper.scrollLeft = scrollX;
    });
});

$(document).ready(function () {
    var modal = document.getElementById("dodModal");

    var img = document.getElementById("dodImg");
    var modalImg = document.getElementById("dodImgModal");
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }

    var span = document.getElementById("dodClose");

    span.onclick = function () {
        modal.style.display = "none";
    };
});