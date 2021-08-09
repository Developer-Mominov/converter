// // fetch('https://jsonplaceholder.typicode.com/users')
// // .then(res => res.json())
// // .then(data => console.log(data))




// // // fetch('https://jsonplaceholder.typicode.com/posts')
// // // .then(res => res.json())
// // // .then(data => console.log(data))
// // // .catch(error => console.log("xato"))

// // fetch('https://jsonplaceholder.typicode.com/users/11')
// //  .then(response => {
// //      if(response.ok){
// //          console.log("succesfull");
// //      }else{
// //          console.log("not succesfull");
// //      }

// //  })


// ////////////////////////////////////////////
// //obyekt yasimiz

// // var xhr = new XMLHttpRequest();

// // //funksiya hosil qilamiz qachonki jovob kesa nima qilishimiz haqida
// // xhr.onload=function() {
// //     var data = this.responseText; // o`zgaruvchiga datani o`zlashtiramiz
// //     console.log('arrived data'+data);
// // }

// // // requestni qayoga jo`natishimizzi belgilimiz
// // xhr.open("GET","https://api.blockchain.com/v3/exchange/specification.yaml");

// // //jo`natamiz
// // xhr.send();


// ///////////////////////////////////////////



// window.addEventListener("load", () =>{

//     // getBitcoin();

//     document.querySelector("#rate").addEventListener("click", () =>{
//          let xhr3 = new XMLHttpRequest();

//          xhr3.onload=function (){

//             try{
//            //todo

//            let data = JSON.parse(this.responseText);
//            let currency = document.querySelector('input').value;
//            console.log(data);

//            let rate2=data.rates[currency.toUpperCase()];
//            document.querySelector("#narx").innerHTML=rate2;
//             }
//             catch(e){
//                 console.log(e);
//             }
//          }

//           //3. 
//           xhr3.open('GET','https://api.exchangeratesapi.io/latest?base=USD');
//           xhr3.send();

//     })    

// })



// // function update(new2){

// //     document.querySelector("#narx").innerHTML= `${new2} (USD)`;
// //     setTimeout(getBitcoin,1*1000);


// // }


// // function getBitcoin(){
// //     var xhd2 = new XMLHttpRequest();
// //     let url="https://blockchain.info/q/24hrprice";

// //     xhd2.onload = function(){
// //       try{
// //         let data2=this.responseText;
// //         document.querySelector("#narx").innerHTML=`${data2} (USD)`; 
// //         update(data2);
// //       }
// //       catch(e){
// //          console.log(e);
// //       }
// //     }


// //     xhd2.open("GET",url);

// //     xhd2.send();
// // }



// //fetch  .....................................

//    fetch('https://blockchain.info/q/24hrprice')
//    .then(response => response.json())
//    .then(data => {
//      document.querySelector("#narx").innerHTML=data;
//    })
//    .catch(e => {
//        console.log(e);
//    })


// let person = {

//     name1:"Asliddin",
//     age:15,
//    get country(){
//     return person.name1+" "+person.age;    
// }

// }

// console.log(person.country);

// let tr= 60 > 20? "true":"false";
// console.log(tr);

// for(let key in person){
// console.log(key,person[key]);
// }


// let obj=Object.assign({},person);

// let objclone ={...person};

// for(let key in person){
//     obj[key]=person[key];

// }


// console.log(objclone);

// let hashmap = new Map([
//     [1,"salom"]
// ]);

// console.log(hashmap.get(1));


// const loptops = [
//     {id:1,cpu:"i5"},
//     {id:2,cpu:"i7"},
//     {id:3,cpu:"i9"},
//     {id:4,cpu:"i9"}
// ]
// const numbers = [1,2,3];
// numbers.splice(1,2,5);
// console.log(numbers);


// let search = loptops.find(function(element){
//     return element == 'i9';
// })
// console.log(search);

// let arr = [4, 5, 2, -1];

// let every1 = arr.some((number) => {
//     return number >= 0;
// })

// let filtering = arr.filter((num) => {
//     return num >= 0;
// })

// arr.splice(1, 3, 2, 5, 4);
// console.log(arr);

// let hash = new Map([
//     [1, "value1"],
//     [2, "value2"]
// ])
// console.log(hash.get(2));



// let arr=[1,2,3,-4,-5,6,7,11];

// let filtering = arr.filter((element) =>{
//    return element >=0;
// }) 

// console.log(filtering);

// let sum= arr.reduce((summinf,current) => {
// return summinf + current;
// },0)

// console.log(sum);


// function read() {
//     console.log("o`qi");
// } //function declaration

// //function exxpression and named
// let write = function () { console.log(); };

// let me2 = write;

// //arrow function
// const ds = () => {
//     console.log("salom");
// }
// ds();


// let arr=[
//     {
//         "ism":"palonchi",
//         "familiya":"pistonchi",
//         "yana":{
//          "bir":"shu"
//         }
//     },
//     {
//         "ism":"palonchi2",
//         "familiya":"pistonchi2",
//         "yana":{
//             "bir":"shu2"
//            }
//     }
// ];

// let items = arr.map((number) => {
//     return '<li>'+number.yana.bir+'/li' 
// })

// console.log(items);

//    fetch('https://blockchain.info/q/24hrprice')
//    .then(response => response.json())
//    .then(data => {
//      document.querySelector("#narx").innerHTML=data;
//    })
//    .catch(e => {
//        console.log(e);
//    })


// console.log("salom");
// var sum=0;
// function stop(){
// console.log("kirdi1");
//     if(sum==0){
// this.stop();
// sum=1;
// console.log("kirdi2");

// }else{
//     console.log(":kirdi3");
//     this.start();
//     sum=0;
//     }
// }

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

function clear (tt) {
var newstr="";
tt = tt.split("");
for (let i = tt.length; i > 0; i -= 3) {
    if(i==tt.length) continue;
    tt.splice(i, 0, ".");
}
for(let key of tt){
newstr+=key;
}
 resultat.value = newstr;

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



