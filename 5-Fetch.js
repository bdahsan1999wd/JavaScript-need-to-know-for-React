/* ------------------------------------------------------ */
// 1. JSON => stringify, parse

// #. JSON => (JavaScript Object Notation)

const student = {
    name: 'Saki Khan',
    age: 32,
    movies: ['king khan', 'Dhaka Mast']
}

// JSON.stringify --------------->!!!

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);


// JSON.parse --------------->!!!

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);



/* ------------------------------------------------------ */
//2. fetch

// No-1 
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


// No-2
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


// No-3
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();


// No-3.1
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();



/* ------------------------------------------------------ */
// 3. Object => keys, values

const keys = Object.keys(student);
const values = Object.values(student);



/* ------------------------------------------------------ */
// 4. Array => for loop

const numbers = [23, 54, 67, 87, 23, 78];

// Using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// No-1 ----------!!!
// Using forEach

numbers.forEach(num => console.log(num));


// No-2 ----------!!!
// Using map() to double each number

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);


// No-3 ----------!!!
// for of

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}


// No-3.1 ----------!!!
// for of => on array like object.

const fruitsObj = {
    0: "apple",
    1: "banana",
    2: "cherry",
    length: 3,
};

for (const fruit of Object.values(fruitsObj)) {
    console.log(fruit);
}


// No-4 ----------!!!
// for in => loop on an object keys (property) using for in.

const person = {
    name: "John",
    age: 30,
    job: "Engineer"
};

for (const key in person) {
    console.log(key);
}



/* ------------------------------------------------------ */
// # Spread Operator

// add or remove from an array using (...spread operator) and (filter method).

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 3500, color: 'black' };

// Copy products array and then add newProduct using spread operator

const newProducts = [...products, newProduct];


/* ------------------------------------------------------*/
// # filter   /* only condition Return array */

// Create a new array without one specific item. Remove phone(item) means create a new array without the phone

const remaining = products.filter(products => products.name !== 'phone');