//----- false value
// 0 -0 "" false null undefined NaN
//----- truthy value
// "0" " " [] {} function "twaki" 12 -12 3.14 -3.14 true

const test = "twaki";

// if (test){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }

test ? console.log("yes") : console.log("no");

const num = 12;
const out = (num >= 10 && num <= 20) ? "ok" : "not ok";
console.log(out);

const isActive = true;
const showUser = () => console.log("show user Green");
const hideUser = () => console.log("hide user");

isActive ? showUser() : hideUser();

isActive && showUser();
!isActive || hideUser();

const nums = "80";
const res = nums -10;

console.log(typeof res) ;