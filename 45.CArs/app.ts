import {features} from "process";
function store_car_info (manufacturer : string , model_name : string ,...extraOption:{[key:string]:any}[]): object {
const carInfo = {
    manufacturer,
    model_name,
    ...Object.assign({},...extraOption)
}
return carInfo
}
let answer = store_car_info ("Honda","civic",{color: "black"},{features : ["navigation","power window"]})
console.log(answer)