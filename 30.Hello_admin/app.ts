let users : string [] = ["Admin",'Shafaq','Humna','Ahmed']

for (let user of users){
if (user === "Admin"){
  console.log("Hello admin would you like to see status report")
} else {
    console.log (`Hello ${user}, Thankyou for logging in again`)
}
}