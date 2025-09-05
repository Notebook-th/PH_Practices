const numbers = [1, 5, 10, 2, 16, 15, 25, 35, 50]
// numbers.forEach(x => console.log(x))

// numbers.forEach(num => {
//     const double = num*10;
//     console.log(double)
// })

const great = numbers.filter( x => x > 25)  
console.log(great)

const even = numbers.filter( y => (y%2 === 0) )
console.log(even)