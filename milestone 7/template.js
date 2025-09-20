const fname = "Nuzhat";
const lname = "Hasan";

console.log(fname +' '+ lname);
console.log(`My wifes name is ${fname} ${lname}`);

const sum = (...rest) => {
    console.log(rest);
}
sum(3, 5);

const numbers = [3, 5, 7, 9];
console.log(numbers);
console.log(...numbers);
const newNumbers = [...numbers, 11, 13];
console.log(newNumbers);



