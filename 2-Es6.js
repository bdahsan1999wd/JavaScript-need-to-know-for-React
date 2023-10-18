const numbers = [89, 35, 98, 12];

const student = {
    name: 'Saki Khan',
    age: 32,
    movies: ['king khan', 'Dhaka Mast']
};


/* ----------------------------------------------- */
// 1. template string

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

console.log(about)


/* ----------------------------------------------- */
// 2. arrow function

const getFiftyFive = () => 55; /* 1. No parameter arrow function */

const addSixtyFive = num => num + 65; /* 2. Single parameter arrow function */

const isEven = x => x % 2 == 0;

const addThree = (x, y, z) => x + y + z; /* 3. Multiple parameter arrow function */

const doMath = (num1, num2) => { /* 4. Multiline arrow function */
    const sum = num1 + num2;
    return sum;
}


/* ----------------------------------------------- */
// 3. spread operator

const originalNumbers = [...numbers];

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(originalNumbers);
console.log(currentNumbers);