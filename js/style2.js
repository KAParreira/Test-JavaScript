function ShakeYourBody(){
    let id = null;
    const elem = document.getElementById("Animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,1.5);
    function frame(){        
        
        if (pos == 925){
            clearInterval(id);
        } else {
            pos++;
            elem.style.min= pos + "px";
            elem.style.left = pos + "px";
        }
    }
}