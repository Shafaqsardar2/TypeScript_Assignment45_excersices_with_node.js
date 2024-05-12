function show_Magicians (magicians : string []) {
    magicians.forEach(names => console.log(names))
}

function The_Great(magicians : string [])  {
  return  magicians.map (names =>  `The Great ${names}`)
}
        


let magician_name : string [] = ["Harry potter","fairyGod Mother","mother Gothal"]

let great_magicians = The_Great (magician_name)

show_Magicians (great_magicians)
