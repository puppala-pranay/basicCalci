function displayonscreen(x) {
    x = String(x);
    if (x != "AC" && x != "=") {
        document.getElementById("screen").innerHTML += x;

    }
    if (x == "AC") {
        document.getElementById("screen").innerHTML = "";

    }
}

function dele() {
    let tmp = "";
    let data = document.getElementById('screen').innerHTML;
    console.log(data);
    for (let i = 0; i < (data.length - 1); i++) {
        tmp += data.charAt(i);
    }
    document.getElementById('screen').innerHTML = tmp;
}

function eq() {
    let data = document.getElementById('screen').innerText;
    data = data.replace("x", "*");
    let reqtoadd = eval(data);
    document.getElementById('screen').innerHTML += " = " + reqtoadd;

    setTimeout(function() {
        document.getElementById("screen").innerHTML = "";
    }, 3000);
}