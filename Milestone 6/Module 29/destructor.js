const product = { namae : 'shirt', price: 500, quantity:8 }
// const price = product.price;
const discount = product.price*20/100;
const pay = product.price - discount;
const vat = product.price*7/100;
const total = pay + vat ;


console.log(total)