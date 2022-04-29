function runFnSchiphol() {
    if (ok){
        if ((Hdg != Heading) || (inputSpeed>0)){

            if (Hdg != inputHdg){
                checkTurn();}
            switch(true){
                case (currentSpeed < 50):{
                    if (inputSpeed > auxSpeed){
                        if (inputSpeed - auxSpeed > 50/(150*20)){
                            auxSpeed = auxSpeed + 50/(150*20);
                        }
                        else {
                            auxSpeed = inputSpeed;
                        }
                    }
                    else {
                        if (auxSpeed - inputSpeed > 50/(150*20)){
                            auxSpeed = auxSpeed - 50/(150*20);
                        }
                        else {
                            auxSpeed = inputSpeed;
                        }
                    }
                    break;
    
                }
    
                case (currentSpeed < 150):{
                    if (inputSpeed > auxSpeed){
                        if (inputSpeed - auxSpeed > 100/(220*20)){
                            auxSpeed = auxSpeed + 100/(220*20);
                        }
                        else {
                            auxSpeed = inputSpeed;
                        }
                    }
                    else {
                        if (auxSpeed - inputSpeed > 100/(220*20)){
                            auxSpeed = auxSpeed - 100/(220*20);
                        }
                        else {
                            auxSpeed = inputSpeed;
                        }
                    }
                    break;
    
                }
    
                case(currentSpeed > 150*20): {
                    if (inputSpeed > auxSpeed){
                        if (inputSpeed - auxSpeed > 150/(220*20)){
                            auxSpeed = auxSpeed + 150/(220*20);
                        }
                        else {
                            auxSpeed = inputSpeed;
                        }
                    }
                    else {
                        if (auxSpeed - inputSpeed > 150*20/(220*20)){
                            auxSpeed = auxSpeed - 150*20/(220*20);
                        }
                        else {
                            auxSpeed = inputSpeed;
                        }
                    }
                    break;
    
                }
            }
        
        if (currentSpeed > 140){
            if (inputAlt > auxAlt){
                if (inputAlt - auxAlt > 2500/(600*20)){
                    auxAlt = auxAlt + 2500/(600*20);
                }
                else {
                    auxAlt = inputAlt;
                }
            }
            else {
                if (auxAlt - inputAlt > 2500/(600*20)){
                    auxAlt = auxAlt - 2500/(600*20);
                }
                else {
                    auxAlt = inputAlt;
                }
            }
        }

            Heading = Math.round(Hdg);
            currentSpeed = auxSpeed;
            currentAlt = auxAlt;
            HeadingRad = Heading * Math.PI / 180;
            currentLat = currentLat + currentSpeed * Math.cos(HeadingRad) / (2160000*20);
            currentLong = currentLong + currentSpeed * Math.sin(HeadingRad) / (2160000*20);
            SchipholCenter = new google.maps.LatLng(currentLat, currentLong);
            marker.setPosition(SchipholCenter);
            var icon = marker.getIcon();
            icon.rotation = Heading;
            marker.setIcon(icon);
            SchipholMap.panTo(SchipholCenter);
            SchipholMap.setCenter(SchipholCenter);
            document.getElementById("Lat").innerHTML = 'Latitude: ' + Math.round(currentLat*10000)/10000;
            document.getElementById("Long").innerHTML = 'Longitude: ' + Math.round(currentLong*10000)/10000;
            document.getElementById("Alt").innerHTML = 'Altitude: ' + Math.round(currentAlt*100)/100 + ' ft';
            document.getElementById("Hdg").innerHTML = 'Heading: ' + Heading;
            document.getElementById("GS").innerHTML = 'Ground Speed: ' + Math.round(currentSpeed*10)/10 + ' knots';
        }
    }
    }

    function checkTurn(){
        if (inputHdg < Hdg){
            if (Math.abs(inputHdg - Hdg)>180){
                if(Hdg - inputHdg > 0.3){
                    Hdg = Hdg + 0.3;
                }
                else {Hdg = inputHdg}
            }
            else{
                if (Hdg - inputHdg > 0.3){
                    Hdg = Hdg - 0.3;
                }
                else {Hdg = inputHdg;}
            }
        }
        else {
            if (Math.abs(inputHdg - Hdg)>180){
                if (inputHdg - Hdg > 0.3){
                    Hdg = Hdg - 0.3;
                }
                else {Hdg = inputHdg}
            }
            else {
                if (inputHdg - Hdg > 0.3){
                    Hdg = Hdg + 0.3;
                }
                else {Hdg=inputHdg}
            }
        }
        if (Hdg < 0){
            Hdg = 360 + Hdg;
        }
        if (Hdg >= 360){
            Hdg = Hdg - 360;
        }
    }