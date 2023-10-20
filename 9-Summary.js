/* 
------------
Fundamentals
------------

1.1 variable (let, const) 3 types of variable: string, boolean, number

1.2 condition (<. >, ===, !==. <=, >=) && ||, if-else if-else

1.3 array: declare, length, index, push, pop, indexOf, includes

1.4 for loop, while loop

1.5 function return parameter

1.6 Object property, including array, object


------------
ES6
------------
1. template string ${} -----!!!

const name = "John";
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);


-------------------------
2. spread (...) 

2.1 copy an array then add a new element to an array

2.2 use filter to remove an element from an array


-------------------------
3. Arrow function =>

3.1 no parameter ()

3.2 single parameter 

3.3 multiple parameters ()

3.4 multi line 


-------------------------
4 destructuring : object destructuring and array destructuring 

5. object declaration shorthand

6. function parameter default value

7. Optional chaining (?.)


---------------------
Browser API
---------------------
1. local storage session storage
2. location API
3. History API
4. fetch
---------------------


---------------------
Others
---------------------
1. array: map, forEach, filter, find
2. ternary operator ? :
3. logical and logical or && ||
4. JSON (stringify, parse)
5. number to string conversion +, and string to number conversion ''

*/

const x = 50;
const y = 100;

const obj = {
    x: x,
    y: y
};

// shortcut
const obj1 = { x, y }

// ---------------------------

const name = 'Solimulla';
const area = 'Dhaka';

const nobab = {
    name: name,
    area: area
}

// shortcut
const nobab2 = { name, area };