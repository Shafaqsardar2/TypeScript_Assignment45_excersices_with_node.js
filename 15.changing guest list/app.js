"use strict";
let guestArr = ["Shafaq", "Humna", "Ahmed", "Eman"];
guestArr.map((items) => (console.log(`Dear ${items} , would you like to have dinner with me tonight`)));
let canNotattend = " Shafaq";
console.log(canNotattend + " ", "Cannot attend the dinner");
let Newguest = "Muhammad";
guestArr[guestArr.indexOf(guestArr[0])] = Newguest;
console.log(guestArr);
guestArr.map((items) => console.log(`Daer ${items}, you are invited to dinner`));
