var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);
// schijf hier tussen je code

btn.onclick = lightswitch;
var On = true

function lightswitch() {
    if (On == true) {
        On = false
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
        btn.innerHTML = 'Off';
        console.log("Lightswitch On")
    }
    else {
        On = true
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
        btn.innerHTML = 'On';
        console.log("Lightswitch Off")
    }
}
 

// schijf hier tussen je code