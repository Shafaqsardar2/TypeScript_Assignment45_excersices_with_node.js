let current_user : string [] = ['Admin','Eric','Shafaq','Sardar','Ahmed','Humna']
let new_user : string [] = ['Humna','Sardar','Eman','Dua','Noor','Qirat']
let current_user_lower : string [] = current_user.map (user => user.toLowerCase())

for (let new_users of new_user) {
    if (current_user_lower.includes (new_users.toLowerCase())) {
        console.log (`sorry ${new_users}, that name is already taken`)
    } else {
        console.log(`Yes ${new_users}, is stil Available in list`)
    }
}