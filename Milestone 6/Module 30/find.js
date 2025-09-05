const numbers = [1, 5, 10, 2, 16, 15, 25, 35, 50]
const first = numbers.find( x => x%2 === 0)
console.log(first)

const students = [
    {id : 1, name : 'abull', marks : 55},
    {id : 2, name : 'Kashem', marks : 56},
    {id : 3, name : 'Sorkar', marks : 57},
    {id : 4, name : 'bari', marks : 59}
]

const names = students.map(students => students.name) 
console.log(names)
const goods = students.find(students => (students.marks > 55))
const good = students.filter(students => (students.marks > 55))
console.log(good)