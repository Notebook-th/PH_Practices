const obj = {
    name : "twaki",
    age : 12,
    location : "dhaka", 
    friends : ["twaki","nuzhat", "hasan", "tabassum", "jarin"], 
    family : {
        father : "khaled",
        mother : "fatema",
        sister : "nuzhat"
    }
}

const jsondata = JSON.stringify(obj);
const plaindata = JSON.parse(jsondata);

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))

// const tell = {
//     name : "twaki",
//     age : 12,
//     location : "dhaka", 
//     country : "bangladesh",
// }

// const keys = Object.keys(tell);
// const values = Object.values(tell);

// console.log(keys);
// console.log(values);


const users = [
    {id: 1, name: "twaki", age: 12},
    {id: 2, name: "nuzhat", age: 22},
    {id: 3, name: "hasan", age: 32},
    {id: 4, name: "tabassum", age: 42},
    {id: 5, name: "jarin", age: 52},
]       

const newData = {
    id : 6,
    name : "shibir",
    age : 62
}

const newArray = [...users, newData];
console.log(newArray);

const remainingData = users.filter(user => user.id !== 3);
console.log(remainingData);