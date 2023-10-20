// truthy ===> 'string', 7, true, {}, [] -----------!!!

// falsy ===> '', 0, false, null, undefined -----------!!!


/* ------------------------------------------ */
// check truthy
let myVar = 5;

// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}



/* ------------------------------------------ */
// check falsy
let myMoney = 50;

// you check negative or falsy anything
if (!myMoney) {

}



/* ------------------------------------------ */
const money = 800;
let food;

if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha biscuit';
}


/* ------------------------------------------ */
// ternary Operator -----!!!

let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);



/* ------------------------------------------ */
// number to string conversion -----!!!

const num1 = 52;
// console.log(num1);

const numStr = num1 + '';
// console.log(numStr)


/* ------------------------------------------- */
// string to number conversion -----!!!

const input = '560';
const inputNum = +input;
// console.log(inputNum);



/* ------------------------------------------- */
// ternary Operator -----!!!
let isActive = true;

const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');

// isActive ? showUser() : hideUser();


/* -------------------------------------------- */
// use && if the left side is true then right side will be executed -----!!!
isActive && showUser();


/* -------------------------------------------- */
// use || if the left side is false then right side will be executed -----!!!
isActive || hideUser();


/* -------------------------------------------- */
// toggle boolean -----!!!
isActive = !isActive;