"use strict";
// Equality and nonequality of strings
let pet = "cat";
console.log("pet is equal to cat?");
console.log(pet == "cat");
console.log("pet is not equal to dog");
console.log(pet !== "dog");
// to compare lower case 
let name1 = "SHAFAQ SARDAR".toLocaleLowerCase();
console.log("is my veriable is in lower case?", name1 == "shafaq sardar");
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 6;
console.log("Equality test:", 1000 == 1000);
console.log("Nonequality test:", num1 !== num2);
console.log("Greater then", 5 > 3);
console.log("lewss then", 4 < 9);
console.log("greater then or equal to", 5 >= 2);
console.log("less then or equal to", num1 <= num2);
//  Tests using "and" and "or" operators
console.log("And operator test:", true && true);
console.log("Or operator test:", true || false);
//  Test whether an item is in a array
let array = ["car", "house", "bag", "phone"];
console.log("Item is in array?", array.includes("bag"));
//  Test whether an item is not in a array
let item = ["car", "house", "bag", "phone"];
console.log("Item is in array?", !item.includes("pins"));
