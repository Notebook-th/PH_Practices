const numbers = [4, 6, 23, 56, 70];


// let sum = 0;
// for(const num of numbers){
//     sum = sum + num;
// }

const total = numbers.reduce((acc, curr) => acc + curr )


console.log(total);