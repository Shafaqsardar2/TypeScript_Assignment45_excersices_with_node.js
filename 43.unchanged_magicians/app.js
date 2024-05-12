"use strict";
function show_Magicians(magicians) {
    magicians.forEach(names => console.log(names));
}
function The_Great(magicians) {
    return magicians.map(names => `The Great ${names}`);
}
let magician_name = ["Harry potter", "fairyGod Mother", "mother Gothal"];
let great_magicians = The_Great(magician_name);
show_Magicians(great_magicians);
let copy_magician_name = magician_name.slice();
let copy_great_magician = The_Great(copy_magician_name);
show_Magicians(magician_name);
show_Magicians(copy_great_magician);
