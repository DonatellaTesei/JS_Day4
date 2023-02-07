//Ex 1

function extract() {
    let fname = document.getElementById("FName").value;
    let lname = document.getElementById("LName").value;
    let age = document.getElementById("age").value;


    document.getElementById("data").innerHTML = `<span id='color'>  ${fname}  </span>  ${lname},  ${age} years old`;

    if (fname.length >= 5) {
        document.getElementById('color').style.color = 'green';
    } else {
        document.getElementById('color').style.color = 'red';
    }

    console.log(fname, lname, age);
}

document.getElementById("btn").addEventListener("click", extract);