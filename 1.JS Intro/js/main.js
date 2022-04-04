// STRICT MODE
'use strict'

// DATA TYPES - Primitive / Non-primitive

/*
var firstName = "Vusal"; // string

var yas = 21; // number

var isStudent = true; // boolean

var address = null; // 

var lastName; // undefined
lastName = "Ismayilov"
console.log(typeof address)

// OOP - Class,Object,Method,Property

var Person = {
    ad: "Murad",
    yas: 20,
    telebedir: false,
    tevellud: function() {
        return new Date().getFullYear() - this.yas
    }

}

console.log(Person.tevellud())


var students = ["Onur","Vusal","Eltac","Ishaq"];
console.log(students[0]);
console.log(typeof students);

// PRINT TO SCREEN => console / alert / document / innerHTML / innerText

console.clear();
// alert(firstName);

document.write("Salam")
document.write("Sagol")

document.getElementById("firstname").innerText = "<i>Murad</i>";

*/


// HOISTING - let const

// var x;
// console.log(x);
// x = 20;

// var x = 10;
// var x = 20;
// console.log(x);

// let y = 5;
// y = 6;
// console.log(y);

// const z = 10;
// z = 20;
// console.log(z);

var x;
x = 10;
console.log(x);


// Comparison > < >= <=
// Aritmethic + = - * / % 
// Logical && || != 
// Bitwise

// var a = 10;
// console.log(typeof a)
// var b = "10";
// console.log(typeof b)

// if(a === b) {
//     alert("Salam");
// }
// else{
//     alert("Sagol")
// }


// var num1 = 10;
// var num2 = 5;

// var hasil = num1 - num2;

// var ad = "Vusal";
// var soyad = "Imanov";
// var yas = 21;

// console.log(ad+ " " +soyad +"un " + yas + " yasi var");
// console.log(`${ad} ${soyad}un ${yas} yasi var`);
// Template Literals



// var x = 15;
// var ad = "Vusal" 

// if(x>18 || ad === "Vusal") {
//     alert("Salam " + ad)
// }
// else{
//     alert("Daxil ola bilmersiniz!!!");
// }


// if(x > 18) {
//     alert("Hi")
// }
// else{
//     alert("Goodbye");
// }

// // Ternary Operators

// var z = x>18 ? "Hi" : "Goodbye"; 


// var ad = "Onur";

// switch(ad) {
//     case "Eltac":
//         alert("Eltac");
//         break;
//     case "Ishaq":
//         alert("Ishaq");
//         break;
//     default:
//         alert("Hec biri deyil");
//         break;
// }

// var div = document.getElementById('first');
// function Open() {
//     div.style.width = "40%";
// }

// function Close() {
//     div.style.width = "0%";
// }

// function Mode(){
//     var photo = document.getElementById('image');
//     if(photo.style.filter === "grayscale(1)") {
//         photo.style.filter = "grayscale(0)"
//     }
//     else{
//         photo.style.filter = "grayscale(1)"
//     }
// }


// MATH - pow,PI,floor,ceil,round,random,trunc,abs,min,max

// console.log(Math.PI);
// console.log(Math.pow(10,2));

// var x = -10.6;

// console.log(Math.max(10,20,30,40,50,60));


// var pi = Math.PI;
// var r = 4;
// var s = pi * r * r;
// console.log(s)

// console.log(Math.floor(Math.random() * 100));


// DATE OBJECT

var date = new Date().getHours();
console.log(date);

if(date > 12) { 
    alert("SALAM");
}
else{
    alert("Sagol")
}