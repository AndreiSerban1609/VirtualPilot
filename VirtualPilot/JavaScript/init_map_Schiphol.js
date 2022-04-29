function init_map_Schiphol(){
    SchipholProp = {
        center: SchipholCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
SchipholMap = new google.maps.Map(document.getElementById("googleMap"), SchipholProp);
}