document.addEventListener("DOMContentLoaded", function () {
  /* ==========================================
     1. ORDER BUTTON
     ========================================== */

  function placeOrder() {
    const imageSection = document.getElementById("image-section");

    if (imageSection) {
      imageSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    showPizzaReward();
  }

  /* ==========================================
     6. NEARBY STORE
     ========================================== */

  window.findNearbyLocation = function () {
    const status = document.getElementById("locationStatus");

    if (!status) {
      return;
    }

    status.innerText = "Finding your location...";

    if (!navigator.geolocation) {
      status.innerText = "Geolocation is not supported by your browser.";

      return;
    }

    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;

        const longitude = position.coords.longitude;

        status.innerHTML = `
          📍 Location found!<br>
          Latitude: ${latitude.toFixed(4)}<br>
          Longitude: ${longitude.toFixed(4)}
        `;

        /* Open nearby Pizza Hut */

        const mapURL = `https://www.google.com/maps/search/Pizza+Hut/@${latitude},${longitude},15z`;

        setTimeout(function () {
          window.open(mapURL, "_blank");
        }, 1000);
      },

      function () {
        status.innerText =
          "Unable to get your location. Please allow location access.";
      },
    );
  };

  /* ==========================================
     7. ENQUIRY FORM
     ========================================== */

  const enquiryForm = document.getElementById("enquiryForm");

  const thankYouMsg = document.getElementById("thankYouMsg");

  if (enquiryForm && thankYouMsg) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      enquiryForm.style.display = "none";

      thankYouMsg.style.display = "block";
    });
  }
});
