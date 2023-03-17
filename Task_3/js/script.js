let buttons = document.querySelector('.button');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let togglebtn = document.querySelector('.togglebtn');
let body = document.querySelector('body');
let lastip;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {

        lastip = this.innerHTML;

        if (this.innerHTML == "°Celsius" || this.innerHTML == "°Fahrenheit" || this.innerHTML == "°Kelvin") {
            break;
        }
        else {
            if (this.innerHTML == "AC") {
                value.innerHTML = "0"
            }
            else {
                value.innerHTML += this.innerHTML;
            }
        }

    })
}

const tocel = () => {
    if(lastip == "°Celsius"){
        value.innerHTML = value.innerHTML;
    }
    else {
    if (lastip == "°Fahrenheit") {

    } else {

    }
}
}

togglebtn.onclick = function () {
    body.classList.toggle('dark');
}