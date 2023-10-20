/* ------------------------------------------- */
// 1. array destructuring

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);

// const [x, y] = [42, 65]
// console.log(x,y);

const [x, y] = numbers;
// console.log(numbers);



function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90, 34));


// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);
console.log(boxify(90, 34));



const student = {
    name: 'Saki Khan',
    age: 32,
    movies: ['king khan', 'Dhaka Mast']
}
const [firstMovie, secondMovie] = student.movies;


/* ------------------------------------------- */
// 2. object destructuring

// const { name, age } = { name: 'alu', age: 24 };

const { name, age } = { id: 12, name: 'alu', salary: 34000, age: 24 };


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;

const { weight, address } = employee.specification;

const { brand } = employee?.specification?.watch;   /* using optional chaining */