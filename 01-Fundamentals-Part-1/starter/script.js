/*
5. Section Intro
6. Hello World!
7. Brief Introduction to Javascript.
*/

// 8. Linking a javascript file
/*
let js = "amazing";
if (js == "boring") {
  console.log("Js is boring");
} else {
  console.log("Js is fun");
}

console.log(40+5+6+-3-10);
*/

// 9. Values and Variables
/*
const firstName = "Sukhmanjeet";
const lastName = "Singh";
let age = 25;
age = 26;
console.log(`Hi I am ${firstName+" "+lastName} and my age is ${age}`);
*/

// 10. Practice Assignment
// 11. Data Types (N,N,B,B,S,S,U)
/*
let age = 25;
let hasValue =  null;
let isMale = true;
let phNo = BigInt(9999999999);
let name_ = "Rancho";
let mySign = Symbol('$');
let isWorking;
console.log(typeof age, age);
console.log(typeof hasValue, hasValue); 
console.log(typeof isMale, isMale);
console.log(typeof phNo, phNo);
console.log(typeof name_, name_);
console.log(typeof mySign, mySign);
console.log(typeof isWorking, isWorking);
*/

// 12. let and const (local scope variables) and var (global scope variable)
/*
// var.............................

// function example() {
//     var x = 10;
//     if (true) {
//         var y = 20;
//         console.log(x); // Output: 10
//         var x = 19;
//     }
//     console.log(y); // Output: 20
//     console.log(x); // Output: 19
// }
// example();

// let.............................

// function example() {
//     let x = 10;
//     if (true) {
//         let y = 20;
//         let x = 55;
//         console.log(x); // Output: 10
//     }
//     console.log(y); // Error: y is not defined
//     console.log(x); // Error: x is not defined
// }
// example();


// Const.............................

// function example() {
//     const x = 10;
//     if (true) {
//         const y = 20;
//         // x = 50;
//         const x = 99;
//         console.log(x); // Output: 10
//     }
//     console.log(x);
//     console.log(y); // Error: y is not defined
// }
// example();
*/

// 13. Basic Operators
/*
// Arthimetic Opr
const now = 2037;
const ageJonas = now-1997;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas / 10, 2**3);

const firstName = "Shinchan";
const lastName = "Nohara";
console.log(firstName + " " + lastName);

// Assignment Opr
let x = 10 + 5;
console.log(x);
x += 10;  // x = x + 5
console.log(x);
x *= 4;
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1
x--; 
console.log(x);

// Comparision Opr
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
*/

/*
// 14. Operator Precedence
// 15. Note about challange
*/

// 16. Challange 1 (Answer)
/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = (massMark / (heightMark * heightMark));
let BMIJohn = (massJohn / (heightJohn * heightJohn));

console.log(BMIMark,BMIJohn);
*/

// 17. Strings and Template Literals
/*
// Strings
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
// (+) to concatinate strings
// (``) backticks
const jonas = "I am " + firstName + ", a " + (year-birthYear) + "year old " + job + "!";
console.log(jonas); 
console.log('For writing multiline string \n\
we use \\n \n\
to change a line');

// Template Literals
//  We can insert variables directly in template literal. This is called String interpolation.
const jonasNew = (`I am ${firstName}, a ${year-birthYear}year old ${job}!`)
console.log(jonasNew); 
console.log(`Template Literals
makes easy to write
multiline string  `);
*/

// 18. Taking Decisions: if/else Statements (Control Structure)
/*
const age = 15;
const isOldEnough = (age>=18);
if (isOldEnough) {
    console.log(`You can drive🚗`);
} else {
    console.log(`You can't drive🚗, you are ${age}year old and still ${18-age}year left!`);
    // document.write("Hello");
}

// const birthYear = 1991;
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`You born in ${century}century!`);
*/

/* 19. Challange 2 (Answer) */
/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = (massMark / (heightMark * heightMark));
let BMIJohn = (massJohn / (heightJohn * heightJohn));

console.log(BMIMark,BMIJohn);

let markHigherBMI = (BMIMark>BMIJohn?`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`:`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
console.log(markHigherBMI);

*/

// 20. Type Conversion and Coercion
/*
// Type Conversion (Manually converting the datatype of variable value)
const inputYear = '1991';
console.log(inputYear, inputYear+9);
console.log(Number(inputYear), Number(inputYear)+9);
console.log(Number('a'));
console.log(typeof NaN);
console.log(String(69)+1998);

// Coercion (JScript automatically converting the datatype of variable value)
const birthYear = 1998;
console.log(birthYear, typeof(birthYear));
const sentence = `I am born on ${birthYear}`;
console.log(sentence, typeof(sentence));
// (+) operator behave as concatination opr for string
console.log('20'+3+7);
console.log(20+3+'7');
console.log('20'-3-7);

let n = '1'+1;
n = n-1;
console.log(n, typeof(n));

console.log(2+3+4+'5');
*/

// 21. Truthy and Falsy value
/*
// Falsy value (0, '', {}. [], undefined, null, NaN)
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

let nullVariable = null;
console.log(nullVariable, typeof(nullVariable), Boolean(nullVariable)); 

let emptyString = '';
console.log(emptyString, typeof(emptyString), Boolean(emptyString));

const money = 0;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`Height is defined!`);
} else {
    console.log(`Height is not defined!`);
}

// Truthy value ......................................
console.log(Boolean({}));
console.log(Boolean([]));

let emptyObj = {};
console.log(emptyObj, typeof(emptyObj), Boolean(emptyObj));

let emptyArr = [];
console.log(emptyArr, typeof(emptyArr), Boolean(emptyArr));


const money_ = 10;
if (money_) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height_ = 123;
if (height_) {
    console.log(`Height is defined!`);
} else {
    console.log(`Height is not defined!`);
}
*/

// 22. Equality Operator (== vs ===)
/*
// In (==) only value to compare.
const age = '18';
if (age == 18) {
    console.log(`You are Adult!`);
} else {
    console.log(`You are under 18!`);
}

// In (===) you get value as well as data type to compare. (===) does not perform type coercion
const age_ = '18';
if (age_ === 18) {
    console.log(`You are Adult!`);
} else {
    console.log(`You are under 18!`);
}

const favourite = Number(prompt(`Whats your favourite number!`));
console.log(favourite, typeof(favourite));

if (favourite === 23) {
    console.log(`23 is a cool number!`);
}
else if(favourite === 7){
    console.log(`7 is a cool number!`);
} 
else if(favourite === 9){
    console.log(`9 is a cool number!`);
} 
else {
    console.log(`Number is not 23 or 7 or 9!`);
}
*/

/* 23. Boolean Logic (&&, ||, !) */

// 24. Logical Operator
/*
const hasDriverLience = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLience && hasGoodVision && !(isTired)) {
    console.log(`Sarah can drive🚗`);
} else {
    console.log(`Sarah cannot drive🚗, Ask someone else!`);
}

if (!(hasDriverLience) || !(hasGoodVision) || isTired) {
    console.log(`Mohit can drive🚗`);
} else {
    console.log(`Mohit cannot drive🚗, Ask someone else!`);
}
*/

// 25. Challange 3 (Answer)
/*
let scoreDolphins = (96+108+89)/3;
let scoreKoalas = (88+91+110)/3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");    
}
else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
} 
else {
    console.log("Both win the trophy");
}
*/

// 26. The Switch  (switch use strict mode (===))
/*
const day = "monday";
switch (day) {
    case "monday":
        console.log(`Working with Arrays!`);
        break;
    case "tuesday":
        console.log(`Numbers, Dates, Intl and Timers!`);
        break;
    case "wednesday":
        console.log(`Advanced DOM and Events!`);
        break;
    case "thrusday":
        console.log(`Object-Oriented Programming!`);
        break;
    case "friday":
        console.log(`Mapty App: OOP,Geolocation, External Libraries, and More!`);
        break;
    case "saturday":
        console.log(`Asynchronous JS: Promises,Async/Await,and AJAX!`);
        break;
    case "sunday":
        console.log(`Modern JS Development: Modules, Tooling, and Functional!`);
        break;
    case "myholiday":
        console.log(`Forkify App: Building a Modern Application and Setting up Git and Development!`);
        break;
    default:
        console.log("Invalid!");
        break;
}
*/

// 27. Statements and Expressions
/*
// Statements: Piece of code which do not produces value
// Expression: Piece of code which produces value (maximum times basic operators we use produces a value or string is a value or any other values) and ternary operator
*/

// 28. The Conditional (Ternary) operators
/*
const age = 117;
console.log(`Sarah can ${age>=18?"drive":'not drive still '+(18-age)+'year left'}🚗`);
*/

/* 29. Challange 4 (Answer) */
/*
let bill = 430;
let tip = (bill >= 50 && bill <= 300)?(bill*0.15):(bill*0.2);
let totalBill = tip + bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`);
*/

/* 30. Javascript Releases: ES5, ES6+ and ESNext. */ 



















