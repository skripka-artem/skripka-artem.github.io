var map;  
var object = {lat: 55.725235, lng: 37.279619};
var map_center = {lat: 55.725235, lng: 37.279619};

var styleArray = [
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            }
        ]
    }
];


function initMap() {
  var center = map_center;
   /*if(($(window).width())<700){
          center = object;
        }*/
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArray,
    scrollwheel: false,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: object,
    map: map,
    icon: "../img/googlemap/ico-map.png"
  });
}

  

  

  

  
$(window).on("resize", function () {
        var a = map.getCenter();

        /*if(($(window).width())<700){
          a = object;
        }else{a = map_center;}*/
        google.maps.event.trigger(map, "resize"), map.setCenter(a)
    });


  


