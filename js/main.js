// Mobile Menu Button
const mobileMenuBtn = document.getElementById("menu-btn");
const myNav = document.querySelector("nav");
const myNavLinks = document.querySelectorAll(".menu ul a");

mobileMenuBtn.addEventListener("click", () => {
  myNav.classList.toggle("show");
  mobileMenuBtn.children[0].classList.toggle("fa-xmark");
  mobileMenuBtn.children[0].classList.toggle("fa-bars-staggered");
  document.body.classList.toggle("overflow-it");

  myNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.click();
    });
  });
});

// ---------------------------------------------------------------------------------Append Wow Initialization
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // Do Nothing
} else {
  new WOW().init();
}
// ---------------------------------------------------------------------------------------------------- Google Maps Restyling

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 3,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(24.6787261, 46.7296562), // Riyadh

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#79f7d9",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e4fff9",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e4fff9",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(24.67847, 46.731499),
    map: map,
    title: "Snazzy!",
  });
}

// Loading Screen

const loadingScreen = document.querySelector(".loading-page");
const theBody = document.querySelector("body");

window.addEventListener("load", () => {
  let percent = 0;
  let i = setInterval(() => {
    document.querySelector(".percentage").textContent = percent + "%";
    document.querySelector(".hr").style.width = percent + "%";

    percent++;

    if (percent == 101) {
      clearInterval(i);
      setInterval(() => {
        // loadingScreen.style.display = "none";
        loadingScreen.remove();
        theBody.style.overflowY = "visible";
      }, 150);
    }
  }, 25);
});
