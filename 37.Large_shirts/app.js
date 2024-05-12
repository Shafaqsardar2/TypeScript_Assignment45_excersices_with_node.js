"use strict";
function make_shirt(size = "Large", printMessage = "i love typeScript") {
    console.log(`Make a ${size} shirt with a message "${printMessage}" printed on it`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love javaScript");
