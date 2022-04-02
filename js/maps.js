function initMap() {
    const uluru = { lat: -50.4287326, lng: 30.5407221 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}