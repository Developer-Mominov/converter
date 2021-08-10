'use strict';


window.onload = () => {
    setTimeout(() => {
        document.querySelector(".header").style.display = "block";

    }, 1000)
}

let sana = new Date();
document.getElementById("sana").innerText = "Your locale date: " + sana.toDateString();

function text() {
    document.getElementById("about").innerText = "dastur berilgan valyutadan 2 - valyutaga qiymatni o'girib beradi,birinchi qiymat va o`girmoqchi bo`lgan valyutangizni kiritasiz kegin 2-qiymatga qaysi valyutaga o`girmoqchi ekanligingizni kiritasiz"
}

var resultat = document.getElementById("result");

try {
    function clear(tt) {
        var newstr = "";
        tt = tt.split("");
        for (let i = tt.length; i > 0; i -= 3) {
            if (i == tt.length) continue;
            tt.splice(i, 0, ".");
        }

        for (let key of tt) {
            newstr += key;
        }
        resultat.value = newstr;
    }
} catch (err) {
    alert(err.message);
}

function result() {

    let first = document.getElementById("currency").value;
    let second = document.getElementById("currency2").value;
    let third = document.getElementById("value").value;
    fetch("https://currency-exchange.p.rapidapi.com/exchange?to=" + second + "&from=" + first + "&q=1.0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d2648660e8msh6e7b2c987ebc387p1cdfaajsn1e3e61530dbc",
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
            clear((data * third).toFixed(0));

        })
        .catch(e => {
            alert(e);
        })


}





fetch("https://currency-exchange.p.rapidapi.com/exchange?to=UZS&from=USD&q=1.0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d2648660e8msh6e7b2c987ebc387p1cdfaajsn1e3e61530dbc",
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("1in").innerHTML = "<h1>1 Dollar: " + "<p class='p'>" + data.toFixed(0) + "</p>" + " So'm</h1>"
    })

fetch("https://currency-exchange.p.rapidapi.com/exchange?to=UZS&from=RUB&q=1.0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d2648660e8msh6e7b2c987ebc387p1cdfaajsn1e3e61530dbc",
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("2in").innerHTML = "<h1>1 Rubl: " + "<p class='p'>" + data.toFixed(0) + "</p>" + " So'm</h1>"
    });

fetch("https://currency-exchange.p.rapidapi.com/exchange?to=UZS&from=EUR&q=1.0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d2648660e8msh6e7b2c987ebc387p1cdfaajsn1e3e61530dbc",
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("3in").innerHTML = "<h1>1 Yevro: " + "<p class='p'>" + data.toFixed(0) + "</p>" + " So'm</h1>"
    });
