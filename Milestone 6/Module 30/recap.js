const tax = 5000;
const eta = 5;
// eta = 2;


const student = { name:'Nuzhat', marks: 99 }
const friends = ['nuzhat', 'tabassum', 'jarin']

// default parameter
function add (n1, n2 = 0){

}

// template string
const dynamicText = `My tax : ${tax} and marks ${student.marks*1.3} has friends : ${friends[1]}`

const innerHTML = `
<div>
    <h1>Hello : ${friends.length}</h1>
    <p>lorem20</p>
</div>
`

//arrow
const add2 = (p1,p2) => p1 + p2;
const ten = x => x * 10;

//spread

const friendss = [...friends, 'ekta', 'shundor', 'meye']

//destructuring
const {marks} = student
console.log(marks)