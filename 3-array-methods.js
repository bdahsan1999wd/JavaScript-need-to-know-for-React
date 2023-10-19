const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


/* ------------------------------------------------- */
// using arrow function----------!!!

// 1. map   /* Return array */

const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);


/* ------------------------------------------------- */
// using arrow function----------!!!

// 2. forEach   /* no Return */

// products.forEach(product => console.log(product))

// products.forEach(product => console.log(product.color))

// multiline arrow function
products.forEach(product => {
    
})


/* ------------------------------------------------- */
// using arrow function----------!!!

// 3. filter   /* only condition Return array */

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


/* ------------------------------------------------- */
// using arrow function----------!!!

// 4. find   /* only first match condition Return */

const special = products.find(p => p.name.includes('n'));
console.log(special);