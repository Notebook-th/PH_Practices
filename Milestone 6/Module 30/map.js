const numbers = [4, 5, 6, 7, 8];

// const double = []
// for(const num of numbers){
//     const result = num*2;
//     double.push(result);
// }


// const doubleIt = x => x * 2;
// const double = numbers.map(doubleIt)

const double = numbers.map(x => x*2)
const five = numbers.map(num => num * 5)
const sqr = numbers.map(num => num * num)
const friends = ['Twaki', 'Nuzhat', 'hasan', 'tabassum']

const nameLength = friends.map(name => name.length)
console.log(double);
console.log(five);
console.log(sqr);
console.log(nameLength);
