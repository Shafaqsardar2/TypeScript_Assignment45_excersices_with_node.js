"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function store_car_info(manufacturer, model_name, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        model_name }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = store_car_info("Honda", "civic", { color: "black" }, { features: ["navigation", "power window"] });
console.log(answer);
