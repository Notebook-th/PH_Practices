const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8  ]
console.log(numbers);
//it dont appear to be array if i put 3 dot before the array
console.log(...numbers);

//math shows the bigest number in the list
const max = Math.max(21, 45, 67, 435)
const maxi = Math.max(...numbers)
console.log(maxi);