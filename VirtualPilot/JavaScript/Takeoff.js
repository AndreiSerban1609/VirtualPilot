function Takeoff(){
    inputSpeed = document.getElementById("insertedSpeed").value;
    inputSpeed = parseInt(inputSpeed);
    inputAlt = document.getElementById("insertedAlt").value;
    inputAlt = parseInt(inputAlt);
    inputHdg = document.getElementById("insertedHdg").value;
    inputHdg = parseInt(inputHdg);
    if (inputHdg >= 0 && inputHdg < 360){
        ok=1;}
    else if (!(inputHdg)){
        ok=1;
        inputHdg = Hdg;
    }
    else ok=0;
    console.log(inputHdg);
}