"use strict";
let current_user = ['Admin', 'Eric', 'Shafaq', 'Sardar', 'Ahmed', 'Humna'];
let new_user = ['Humna', 'Sardar', 'Eman', 'Dua', 'Noor', 'Qirat'];
let current_user_lower = current_user.map(user => user.toLowerCase());
for (let new_users of new_user) {
    if (current_user_lower.includes(new_users.toLowerCase())) {
        console.log(`sorry ${new_users}, that name is already taken`);
    }
    else {
        console.log(`Yes ${new_users}, is stil Available in list`);
    }
}
