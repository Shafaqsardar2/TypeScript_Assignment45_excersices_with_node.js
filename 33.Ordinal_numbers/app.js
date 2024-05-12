"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let one_num of numbers) {
    let ordinalEnding;
    if (one_num === 1) {
        ordinalEnding = "st";
    }
    else if (one_num === 2) {
        ordinalEnding = "nd";
    }
    else if (one_num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${one_num}${ordinalEnding}`);
}
