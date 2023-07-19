Drupal.geolocation.maps[0].mapMarkers.map(
    (e) => {
        let a = {
            "title": e.title,
            "lat": e.internalPosition.lat(),
            "lng": e.internalPosition.lng(),
        };
        return a;
    });


    