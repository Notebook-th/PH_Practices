//  all premitive values always pass by value

function multiply(x, y){
x = x + 5;
y = y - 10;

    const mult = x * y;
    return mult;
}

const a = 5;
const b = 7;

const mula = multiply(a, b)
console.log(mula)


// non premitive values pass by ref

const manik = { name: 'twakli', age : 13}
const roton = { name: 'hasan', age : 32}

console.log('Before call', manik, roton);

function totalAge(p1,p2){
    p1.age = 0;
    p2.age = p2.age / 2;
    const total = p1.age + p2.age
    return total;
}

const year = totalAge(manik, roton)
console.log('total age', year)

console.log('after call', manik, roton);