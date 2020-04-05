let map;
function initMap() {
  let styledMapType = new google.maps.StyledMapType(
    [
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
    {name: 'Styled Map'});

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 13,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
      }
    });

    map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    const office = {lat: 37.7716169,lng: -122.4050478}

    let marker1 = new google.maps.Marker({position: office, map: map, icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 4,
      fillColor: 'white',
      fillOpacity: 0.0,
      strokeColor: 'blue',
      strokeOpacity: 0.6
    },});
    
    const office2 = {lat: 37.7710522,lng: -122.4033142}
    let marker2 = new google.maps.Marker({position: office2, map: map, icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 4,
      fillColor: 'white',
      fillOpacity: 0.0,
      strokeColor: 'red',
      strokeOpacity: 0.6
    }});

    let icons = {
      helper: {
        name: 'red: seeker'
      },
      seeker: {
        name: 'blue: helper'
      }
    };

    let legend = document.getElementById('legend');
    for (let key in icons) {
      let type = icons[key];
      let name = type.name;
      let div = document.createElement('div');
      div.innerHTML = name;
      legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

    marker1.addListener('click', function() {
       //do something
       alert('Alyss, San Francisco, CA, XXX-XXX-XXXX, needs help with groceries')
    });

    marker2.addListener('click', function() {
      //do something
      alert('Benni, San Francisco, CA, XXX-XXX-XXXX, needs help with groceries')
    });

    google.maps.event.addListener(map, 'click', function( event ){
      //alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
    });
  }


