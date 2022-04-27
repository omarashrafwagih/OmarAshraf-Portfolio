// Google Maps Restyling -------------------------------------------------
window.addEventListener("load", init);
function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 4,

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
            color: "#9adbca",
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
  var markerKSA = new google.maps.Marker({
    position: new google.maps.LatLng(24.67847, 46.731499),
    map: map,
    title: "Snazzy!",
  });
  var markerEgypt = new google.maps.Marker({
    position: new google.maps.LatLng(30.034767, 31.459845),
    map: map,
    title: "Snazzy!",
  });
}

// Loading Screen -------------------------------------------------
const loadingScreen = document.querySelector(".loading-page");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  let percent = 0;
  let i = setInterval(() => {
    document.querySelector(".percentage").textContent = percent + "%";
    document.querySelector(".hr").style.width = percent + "%";

    percent++;

    if (percent == 101) {
      clearInterval(i);
      setInterval(() => {
        loadingScreen.style.display = "none";
        loadingScreen.remove();
        document.body.style.overflowY = "visible";
      }, 120);
    }
  }, 10);
});

// Notification On Right Click -------------------------------------------------
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let notificationContainer = document.querySelector(".notification-container");
  let myNotification = document.createElement("p");
  myNotification.textContent = "Right Click Is Not Allowed 😈";
  myNotification.classList.add("notification");
  notificationContainer.appendChild(myNotification);

  notificationContainer.children[0].play();

  setTimeout(() => {
    myNotification.remove();
  }, 2500);
});

// Path Line SVG Draw Animation On Scroll -------------------------------------------------
let path = document.querySelector("path");
let pathLen = path.getTotalLength();

path.style.strokeDasharray = pathLen + " " + pathLen;
path.style.strokeDashoffset = pathLen;

window.addEventListener("scroll", () => {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  let drawLength = pathLen * scrollPercentage;
  path.style.strokeDashoffset = pathLen - drawLength;
});

// Updated Date In The Footer -------------------------------------------------
document.getElementById("date").innerHTML = new Date().getFullYear();
