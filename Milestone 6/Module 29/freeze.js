const employee = {
    name : 'Nuzhat',
    designation : 'Bou',
    salary : 15000 ,
    experience : 12, 
    age : 32
}
Object.seal(employee);
//modify korte dibe, delete add krte dibe na
Object.freeze(employee);
// freeze : it dont allow any modificaion of the data
delete employee.age
employee.location = 'Dhaka'
console.log(employee);
employee.salary = employee.salary + 100000000;
console.log(employee);