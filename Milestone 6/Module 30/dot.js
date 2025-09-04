const student = {
    name: 'Twaki',
    marks: 99,
    age: 22,
    1: 45,
    time: 55

}
// dot notation
const StName = student.name;
console.log(StName);
// Bracket notation
const stOne = student['1']
console.log(stOne);

for(const key in student){
    const value = student.key;
    const value1 = student[key];
    console.log(value);
    console.log(value1);
}