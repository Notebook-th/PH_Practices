const products = [
    { name: 'Laptop', brand:'HP', price: 999.99, color: 'Silver' },
    { name: 'Smartphone', brand:'Samsung', price: 499.99, color: 'Black' },
    { name: 'Tablet', brand:'Apple', price: 299.99, color: 'Gold' }
]

const result = products.map(product => product.color);
console.log(result);

products.forEach(product => console.log(product.price));


const results =  products.filter(product => product.color === 'Black');
console.log(results);

const where = products.find(product => product.name === 'Tablet');
console.log(where);