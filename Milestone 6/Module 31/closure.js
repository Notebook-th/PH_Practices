// function counter(){
//     let count = 0;
//     function innerFunction(){
//         console.log('inside the inner function')
//     }
//     return innerFunction;
//     return count;
// }

// const output = counter();
// console.log(output());


function counter(){
    let count = 10;
    
    return function(){
        count = count + 10;
        console.log('inside the inner function', count)
    }
}
const inner = counter()
inner()
inner()
inner()