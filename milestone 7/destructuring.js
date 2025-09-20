const friends = ["twaki","nuzhat", "hasan", "tabassum", "jarin"];

// const el1 = friends[0];
// const el2 = friends[1];
// const el3 = friends[2];
// const el4 = friends[3];
// const el5 = friends[4];

const [el1, el4, el5, el2, el3] = friends;

console.log(el1, el2, el3, el4, el5);


const person = {
    name: "twaki",
    age: 12,
    location: "dhaka",
    friend : ["twaki","nuzhat", "hasan", "tabassum", "jarin"]
};

const { name, location, age, friend } = person;

console.log(name, location, age, friends);