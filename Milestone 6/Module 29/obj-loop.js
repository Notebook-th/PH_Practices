const numbers = [1, 12, 123, 1234, 12345];
for (const num of numbers){
    console.log(num);
}

const employee = {
    name : 'Nuzhat',
    designation : 'Bou',
    salary : 15000 ,
    experience : 12, 
    age : 32
}
for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}


