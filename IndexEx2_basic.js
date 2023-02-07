//Ex2

function extract() {
    let fname = document.getElementById("FName").value;
    let lname = document.getElementById("LName").value;
    let age = document.getElementById("age").value;
    let profession = document.getElementById("profession").value;


    document.getElementById("data").innerHTML = `<span id='color'>  ${fname}  </span>  ${lname},  ${age} years old, and works in <span id='background'>${profession} </span>`;

    if (fname.length >= 5) {
        document.getElementById('color').style.color = 'green';
    } else {
        document.getElementById('color').style.color = 'red';
    }

    if (profession == "IT") {
        document.getElementById('background').style.background = 'purple';
    } else if (profession == "Hospitality") {
        document.getElementById('background').style.background = 'yellow';
    } else {
        document.getElementById('background').style.background = 'gray';
    }

    console.log(fname, lname, age, profession);
}

document.getElementById("btn").addEventListener("click", extract);