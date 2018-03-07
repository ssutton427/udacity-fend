function mvc() {
    var map;
    var infowindow;

    function toggleBounce(marker) {
       if (marker.getAnimation() !== null) {
         marker.setAnimation(null);
       } else {
         marker.setAnimation(google.maps.Animation.BOUNCE);
       }

       setTimeout(function(){
         marker.setAnimation(null);
       }, 3000);
     }

    window.initMap = function() {
        var uluru = {
            lat: 38.99254176772053,
            lng: -77.04914771686227
        };
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: uluru
        });
        infowindow = new google.maps.InfoWindow();
    };

    var self = this;
    window.logmvc = function() {
        console.log(self);
    };

    self.api = "https://api.foursquare.com/v2/venues/search?client_id=YG0MNN4AUJHAWGJ25WX3S2FGH34SZRUCCPKRALVYGZHU5DVW&client_secret=SB0GY0UIH1DS3TQ1JVKW5S4V2NU1MELWBYKTVJ2ZBBHITRNI&v=20130815%20&limit=20&near=silver spring&query=shopping";
    self.showing = ko.observable(true);
    self.toggle = function() {
      self.showing(!self.showing());
    };
    self.venues = ko.observableArray([]);
    self.filteredVenues = ko.observableArray([]);
    self.getvenues = function() {
        fetch(self.api)
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                self.venues(data.response.venues);
                self.filteredVenues(data.response.venues);
                self.addmarker();
            })
            .catch(function(error) {
                alert("error");
            });
    };
    self.getvenues();

    var markers = {};

    self.addmarker = function() {
        var venues = self.venues();
        // console.log(venues);
        venues.forEach(function(venue) {
            var marker = new google.maps.Marker({
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                },
                animation: google.maps.Animation.DROP,
                map: map
            });
            var content = "<div>" + venue.name + "<br/>" + venue.hereNow.summary + "</div>";

            marker.addListener("click", function() {
                infowindow.setContent(content);
                infowindow.open(map, marker);
                toggleBounce(marker);
            });

            markers[venue.id] = {
                marker: marker,
                content: content
            };
        });

        console.log(markers);
    };

    self.showMarker = function(venue) {
        // console.log(venue);
        var marker = markers[venue.id].marker;
        var content = markers[venue.id].content;
        infowindow.setContent(content);
        infowindow.open(map, marker);
        toggleBounce(marker);
    };

    self.filterMarkers = function(data, event) {
        var query = event.target.value;
        if (query === "") {
            self.filteredVenues(self.venues());
            Object.keys(markers).forEach(function(key) {
                markers[key].marker.setMap(map);
            });
        } else {
            var venues = self.venues();
            self.filteredVenues([]);
            venues.forEach(function(venue) {
                if (venue.name.indexOf(query) == -1) {
                    markers[venue.id].marker.setMap(null);
                } else {
                    markers[venue.id].marker.setMap(map);
                    self.filteredVenues.push(venue);
                }
            });
        }
    };
}


ko.applyBindings(new mvc());
