let places : string [] = ["Paris", "SaudiArabia","Turkey","Canada","America"];
console.log("Original order:",places)

// Alphabatical order
console.log ("Alphabatical Order:", [... places].sort())

//  show that array is in its original position
console.log("Original Position:", places)

// Reverse Alphabetical order 
console.log ("Reverse Alphabatical Order:", [... places].sort().reverse())

//  show that array is still in its original position
console.log("Original Position:", places)

// Change the order showing that your array has changed
places.reverse( )
console.log ("Reverse List array changed:" , places)

// bring back to its original position
console.log("Original order:", places.reverse())

// sort array in alphabetical order showing array has been chnaged
places.sort()
console.log("Alphabetical order : ", places)

// sort your array in reverse alphabetical order
places.sort().reverse()
console.log("Reverse Alphabetical order :", places)