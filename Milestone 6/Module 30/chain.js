const student = {
    name: 'Twaki',
    marks: 99,
    age: 22,
    1: 45,
    family: {
        title: "Ali",
        father: {
            name: 'Anwar Ali'
        },
    },
    time: 55
}

console.log(student.family.father.name)
// optional chain "?", na thakle, na paile undefined blbe
console.log(student.family.mother?.name)