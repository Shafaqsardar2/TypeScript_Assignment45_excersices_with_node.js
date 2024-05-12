function makeSandwich (...items : string []) {
console.log ("\n making a sandwixh with following items: \n")
items.forEach (singleItem => console.log(singleItem))
console.log ("\n now enjoy your sandwich")
}
makeSandwich("bread",'mayo','egg')

makeSandwich ('bread','butter')

makeSandwich ('bread','chicken','mayo','ketchup')