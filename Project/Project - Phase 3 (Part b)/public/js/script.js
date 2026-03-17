// prevents submit if invalid
(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        });
    });
})();

// flash message auto-dismiss
setTimeout(() => {
    const alerts = document.querySelectorAll(".flash-alert");

    alerts.forEach((alert) => {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 500);
    });
}, 5000);

// map
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates,
    zoom: 9,
});

new mapboxgl.Marker({ color: "#dc3545" })
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 30, closeButton: true })
            .setHTML(`
                <div>
                    <h6>${listingTitle}</h6>
                    <p>Exact location will be shared after booking confirmation.</p>
                </div>
        `)
    )
    .addTo(map);