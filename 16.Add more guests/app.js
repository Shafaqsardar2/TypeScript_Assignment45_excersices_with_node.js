"use strict";
let newGuestList = ["Shafaq", "Humna", "Ahmed"];
console.log("Hey Everyone! we found a bigger dinner table. lets call soe ore guests");
newGuestList.unshift("Emaan");
newGuestList.push("Bisma");
let MiddleGuest = Math.floor(newGuestList.length / 2);
newGuestList.splice(MiddleGuest, 0, "Dua");
newGuestList.forEach((moreInvitation => console.log(`Hey ${moreInvitation} would you like to have dinner with me tonight`)));
