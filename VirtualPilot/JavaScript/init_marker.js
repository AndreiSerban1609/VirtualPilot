function init_marker_Paris(){
    const svgMarker = {
        path: "M 480,840 L 480, 800 320,800 320,720 360,720 360,680 440,680 440,480 400,480 400,440 320,440 320,400 200,400 200,360 40,360 40,320 0,320 0,240 40,240 40,200 240,200 240,160 400,160 400,85 440,85 440,45 560,45 560,85 600,85 600,160 760,160 760,200 960,200 960,240 1000,240 1000,320 960,320 960,360 800,360 800,400 680,400 680,440 600,440 600,480 560,480 560,680 640,680 640,720 680,720 680,800 520,800 520,840Z",
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "white",
        rotation: Heading,
        anchor: new google.maps.Point(500, 500),
        scale: 0.05
    }
    marker = new google.maps.Marker({
        position: CdGCenter,
        map: CdGMap,
        icon: svgMarker,
        title: "You"
      });
    marker.setMap(CdGMap);
}

function init_marker_Heathrow(){
    const svgMarker = {
        path: "M 480,840 L 480, 800 320,800 320,720 360,720 360,680 440,680 440,480 400,480 400,440 320,440 320,400 200,400 200,360 40,360 40,320 0,320 0,240 40,240 40,200 240,200 240,160 400,160 400,85 440,85 440,45 560,45 560,85 600,85 600,160 760,160 760,200 960,200 960,240 1000,240 1000,320 960,320 960,360 800,360 800,400 680,400 680,440 600,440 600,480 560,480 560,680 640,680 640,720 680,720 680,800 520,800 520,840Z",
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "white",
        rotation: Heading,
        anchor: new google.maps.Point(500, 500),
        scale: 0.05
    }
    marker = new google.maps.Marker({
        position: HeathrowCenter,
        map: HeathrowMap,
        icon: svgMarker,
        title: "You"
      });
    marker.setMap(HeathrowMap);
}

function init_marker_Schiphol(){
    const svgMarker = {
        path: "M 480,840 L 480, 800 320,800 320,720 360,720 360,680 440,680 440,480 400,480 400,440 320,440 320,400 200,400 200,360 40,360 40,320 0,320 0,240 40,240 40,200 240,200 240,160 400,160 400,85 440,85 440,45 560,45 560,85 600,85 600,160 760,160 760,200 960,200 960,240 1000,240 1000,320 960,320 960,360 800,360 800,400 680,400 680,440 600,440 600,480 560,480 560,680 640,680 640,720 680,720 680,800 520,800 520,840Z",
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "white",
        rotation: Heading,
        anchor: new google.maps.Point(500, 500),
        scale: 0.05
    }
    marker = new google.maps.Marker({
        position: SchipholCenter,
        map: SchipholMap,
        icon: svgMarker,
        title: "You"
      });
    marker.setMap(SchipholMap);}