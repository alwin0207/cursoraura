// getting document objects.
var backgroundContainer = document.getElementById("background");
var mouseAura = document.getElementById("backgroundeffect");
var mouseAuraStyle = mouseAura.style;

// adding event listeners
var auraEntering = backgroundContainer.addEventListener("mouseenter", positieReset);
var auraMoving = backgroundContainer.addEventListener("mousemove", auraMoving);

// initiating variables (showing the position of the aura effect)
var auraPositionx = mouseAura.style.left;
var auraPositiony = mouseAura.style.top;


// feature in progress: reset aura values when entering the screen (probably not needed while using mousemove)
function positieReset(){
    
}

// function: move the auracontainer in the direction of the mouse and the containers background in the opposite direction.
function auraMoving(){

    // get location of mouse within the current frame
    var myX = window.event.offsetX;
    var myY = window.event.offsetY;
    // change the location variables of the auracontainer
    var myAltX = myX;
    var myAltY = myY; 
    var pixX = myAltX + "px"; // css wants a string instead of a number
    var pixY = myAltY + "px";
    // change location of the auracontainer within the document
    mouseAura.style.left = pixX;
    mouseAura.style.top = pixY;
    // change location of the auracontainer background in the opposite direction (creates a hole illusion by hiding the overflow of the image )
    mouseAura.style.backgroundPositionX = "-" + pixX;
    mouseAura.style.backgroundPositionY = "-" + pixY;

}