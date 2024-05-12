"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let shrinkGuestList = ["Shafaq", "Humna", "Ahmed",];
console.log(shrinkGuestList);
console.log(`${shrinkGuestList[1]} is not coming`);
shrinkGuestList.splice(1, 1, "ANoosha");
console.log(shrinkGuestList);
console.log("Hi everyone! we found a bigger dinner table lets call some more guests");
shrinkGuestList.unshift("Habiba");
shrinkGuestList.push("laiba");
let middleGuest = Math.floor(shrinkGuestList.length / 2);
shrinkGuestList.splice(middleGuest, 0, "Maryam");
console.log(shrinkGuestList);
shrinkGuestList.forEach((shinkInvitation) => console.log(`Hey ${shinkInvitation} i would love to catch up over dinner how about to have dinner with me on this weekend`));
console.log("Unfortunately new dinner table would not arrive on time for dinner so i have space for only two persons");
while (shrinkGuestList.length > 2) {
    let removeGuestList = shrinkGuestList.pop();
    console.log(`Sorry ${removeGuestList} i cant invite to dinner`);
}
console.log(`inviting 2 remaining guest to dinner`);
shrinkGuestList.forEach(guestinvitation => console.log(`hey ${guestinvitation} you are still invited to dinner`));
shrinkGuestList.pop();
shrinkGuestList.pop;
