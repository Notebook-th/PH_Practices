let name = "twaki";
name = "hasan";

console.log(name);

const Country = "BD";

console.log(name, Country);

const friends = ["twaki","nuzhat", "hasan", "tabassum", "jarin"];
friends.push("ban") //add at last
console.log(friends) 
friends.pop() //remove from last
console.log(friends)
friends.unshift("wow") // add at first
console.log(friends)
friends.shift() //remove from first
console.log(friends)
console.log(friends.slice(2)) //will show from the array point to the left
console.log(friends.slice(2,3)) //will show from the array point to the left and before the 3
console.log(friends.splice(2,3)) //will show from the array point to the left and to the index 3


for ( let index = 0; index < friends.length; index++){
    const element = friends[index];
    console.log(element)
}

function sum ( a, b){
   const  result =  a+b;
   return result
}
const output = sum(3, 5);
console.log(output)

const person = {
    name: "twaki",
    age: 12,
    Country : "bd",
    friend : friends
}

console.log(person)
