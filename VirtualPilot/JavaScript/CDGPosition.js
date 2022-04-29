function CDGPosition() {
    let StartingPosition = [48.996050210985516, 2.554692811092842];
    var myCenter = new google.maps.LatLng(StartingPosition);

      function initialize()
      {
          var mapProp = {
              center: myCenter,
              zoom: 15,
              //Can be either ROADMAP, SATELLITE, HYBRID, OR TERRAIN
              mapTypeId: google.maps.MapTypeId.SATELLITE
          };

      
                var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                var icon ={
                    url: "planeIcon.png",
                    scaledSize: new google.maps.Size(45,45),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(0,0)
                }
                var marker = new google.maps.Marker({
                    position: myCenter,
                    map: map,
                    icon: icon
                  });
                marker.setMap(map);
            
                }      
            }         