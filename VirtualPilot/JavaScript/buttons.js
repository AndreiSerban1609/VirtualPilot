function AltitudeDownFn(){
    auxAlt=auxAlt-100;
    if (auxAlt<1000){
      auxAlt=1000;
      window.alert("Pici in cap chill");
    }
    document.getElementById("Alt").innerHTML = "Altitude: " + auxAlt + ' feet';
  }
  

  function AltitudeUpFn(){
    auxAlt = auxAlt + 100;
    if (auxAlt > 40000){
      auxAlt = 40000;
      window.alert("Ajungi in orbita chill");
    }
    document.getElementById("Alt").innerHTML = "Altitude: " + auxAlt + ' feet';
  }

  function turnLeftFn() {
    Hdg = Hdg - 2;
     if (Hdg<0){
      Hdg = 360 + Hdg;
     }
     document.getElementById("Hdg").innerHTML = 'Heading: ' + Hdg;
     return Hdg;
   }

   function turnRightFn() {
    Hdg = Hdg + 2;
    if (Hdg>360){
      Hdg = Hdg - 360;
    }
    document.getElementById("Hdg").innerHTML = 'Heading: ' + Hdg;
    return Hdg;
  }

  function SpeedUpFn(){
    auxSpeed = auxSpeed + 2;
    if (auxSpeed>380) {
      auxSpeed=380;
      window.alert("Your engine reached its limit");
    }
    document.getElementById("GS").innerHTML = 'Ground Speed: ' + auxSpeed + ' knots';
  }

  function SpeedDownFn(){
    auxSpeed = auxSpeed - 2;
    if (auxSpeed<120){
      auxSpeed=120;
      window.alert("You're about to stall");
    }
    document.getElementById("GS").innerHTML = 'Ground Speed: ' + auxSpeed + ' knots';
  }