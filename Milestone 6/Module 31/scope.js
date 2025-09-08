const n = 'Twaki'; // global scope

if(true){
    const data = 50;
    console.log(n, data)
    Mathe(5,6)
}
// console.log(data);

// for (const num of [1,2,3,4,5]){

// }

//function scope or local scope

function Mathe(a,b){
    console.log(a,b)
}