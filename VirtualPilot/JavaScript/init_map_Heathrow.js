function init_map_Heathrow(){
    HeathrowProp = {
        center: HeathrowCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
HeathrowMap = new google.maps.Map(document.getElementById("googleMap"), HeathrowProp);
}
