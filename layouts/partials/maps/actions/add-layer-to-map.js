<script>
    function addLocationToMap(mapLocation) {
        L.marker([mapLocation.lat, mapLocation.lng])
        .bindPopup(setMapPopupData(mapLocation))
        .addTo(map);
    }

    function setMapPopupData(mapLocation) {
        let popupContainer = document.createElement("div");
        let title = document.createElement("div");
        title.innerText = mapLocation.title;
        let address = document.createElement("div");
        address.innerText = mapLocation.address;
        popupContainer.appendChild(title);
        popupContainer.appendChild(address);
        return popupContainer;
    }
    async function fetchMapData() {
        const response = await fetch({{ . }});
        const mapData = await response.json();
        populateMap(mapData);
        addAllInitialLocations(mapData.locations);
    };
    fetchMapData();
</script>