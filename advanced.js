//1
function textCircle() {
    document.getElementById("text1").innerHTML = "You are in the circle"
    document.getElementById("text2").innerHTML = "";
}


//2
function textOutside() {
    document.getElementById("text1").innerHTML = ""
    document.getElementById("text2").innerHTML = "You are outside of the circle";
}

//3
let dot = false;

function click() {
    if (dot == false) {
        document.getElementById("dot").style.background = "white";
        dot = true;
    } else {
        document.getElementById("dot").style.background = "gray";
        dot = false;
    }
}

//or alternatively
// function click() {
//     document.getElementById("dot").style.background = "gray"
// }

//4
function doubleClick() {
    document.getElementById("dot").style.background = "blue"
}

//events
document.getElementById("dot").addEventListener("mouseover", textCircle);
document.getElementById("dot").addEventListener("mouseout", textOutside);
document.getElementById("dot").addEventListener("click", click);
document.getElementById("dot").addEventListener("dblclick", doubleClick);