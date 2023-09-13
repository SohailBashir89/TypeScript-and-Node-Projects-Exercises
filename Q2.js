"use strict";
//Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = ("Sohail Bashir");
var lowercase = personName.toLowerCase();
console.log(lowercase);
var uppercase = personName.toUpperCase();
console.log(uppercase);
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
