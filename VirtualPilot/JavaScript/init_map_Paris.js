function init_map_Paris(){
    CdGProp = {
        center: CdGCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
CdGMap = new google.maps.Map(document.getElementById("googleMap"), CdGProp);
}
