"use strict";
let NameCase = "Karachi";
console.log(" lowercase", NameCase.toLocaleLowerCase());
console.log("UpperCase", NameCase.toLocaleUpperCase());
console.log("TitleCase", NameCase.replace(/\bw/g, c => c.toUpperCase()));
