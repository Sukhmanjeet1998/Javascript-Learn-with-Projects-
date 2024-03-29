/* 31. Section Intro */
// 32. Activating Strict Mode
"use strict";
/*
// check is strict working!
// num = 5;

let hasDriverLience = false;
const passTest = true;

if (passTest) {
    hasDriverLience = true;
} else {
    console.log("Please pass the driving test!");
}

if (hasDriverLience) {
    console.log("You can drive!");
}

// const interface = "hello";   (Reserved Word)
*/

// 33. Functions
/*
function message(){
    console.log("Let resume learning and start functions!");
}
message();

function fruitProcessor(apples, oranges){  // parameters
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}
let appleJuice = fruitProcessor(5,0);  // arguments
console.log(appleJuice);
let orangeJuice = fruitProcessor(0,5);
console.log(orangeJuice);
let mixJuice = fruitProcessor(5,5);
console.log(mixJuice);
*/

// 34. Function Declarations vs Expression
/*
// function defination = function declaration/Expression + fun body

// function declaration : You can call function before decalration
const myAge1 = calcAge1(1998);
function calcAge1(birthYear){  
    // function body
    const age = 2024 - birthYear;
    return age;
}
const myAge2 = calcAge1(1993);
const myAge3 = calcAge1(1991);
console.log(myAge1);
console.log(myAge2);
console.log(myAge3);

// function expression : involve assigning a function to a variable or passing it as an argument to another function and you cannot call function before declaration.
console.log(`Average of 1,2,3,4,5 is: ${getAvg(1,2,3,4,5)}`);
const getAvg = function (num1, num2, num3, num4, num5){
    return ((num1+num2+num3+num4+num5)/5);
}
*/

// 35. Arrow Function
/*
const calcAge = (myBirthYear) => {
    return 2024-myBirthYear;
}
let myAge = calcAge(1998);
console.log(myAge);

const avg = (num1,num2,num3,num4,num5=5) => {
    return ((num1+num2+num3+num4+num5)/5);
}
console.log(`Average of 1,2,3,4 and 5 is: ${avg(1,2,3,4)}`);
*/

// 36. Functions Calling Other Functions
/*
// Arrow function
const mixer = (fruit) => {
    return (fruit*4);
}

// function expression
const fruitProcessor = function (apples, oranges){
    let applepieces = mixer(apples);
    let orangepieces = mixer(oranges);
    console.log(applepieces,orangepieces);
    const juice = `Juice with ${applepieces} applepieces and ${orangepieces} orangepieces!`;
    return juice;
}
console.log(fruitProcessor(5,5));
*/

/* 37. Reviewing Functions */
/*
// Arrow function
const calcAge = (birthYear) => {
    return 2024-birthYear;
}
// function expression
const yearsIBorn = function (birthYear,firstname) {
    return (`Hi I am ${firstname} and I am ${calcAge(birthYear)}year old!`);
}
console.log(yearsIBorn(1998,"Sukhmanjeet Singh"));
*/
/*
// function declaration : function can be used before declaration
function calcAge(birthYear){
    return 2024-birthYear;
}
// function expresion : Essentially a function value stored in a variable 
const myAge = function(birthYear){
    return 2024-birthYear;
}
// arrow function
const ageMy = (birthYear) => {
    return 2024-birthYear;
}

console.log(`My age is ${calcAge(1998)}`);
console.log(`My age is ${myAge(1998)}`);
console.log(`My age is ${ageMy(1998)}`);

// Three different ways of writing functions, but they all work in a similar way: input data, transform data, and then output data.
*/

/* 38. challange 5 (Answer) */
// 39. Introductions to Arrays
/*
const info = ['Sukhman', 25, Symbol('@'), null, true,BigInt(9999),undefined];

console.log(info);

const info_ =  Array('Sukhman', 25, Symbol('@'), null, true,BigInt(9999),undefined,"newArray");

console.log(info_);

console.log(info_[0]);
console.log(info_[1]);
console.log(info_[2]);
console.log(info_.length);
console.log(info_[(info_.length)-1]);

info_[0] = "Aman"

console.log(info_);

const d = new Date();
let year = d.getFullYear();
const years = Array(1991, 1993, 1998);
const ageIs = (age) => {
    return d.getFullYear()-age;
};
console.log(ageIs(years[0]));
console.log(ageIs(years[1]));
console.log(ageIs(years[years.length-1]));
*/

// 40. Basics Array Operations (Methods)
/*
const myBag = Array("Mobile", "Wallet");

// Add element
let length = myBag.push("Laptop");  // push return length of array after adding new element
console.log(myBag, length);

length = myBag.unshift("Pen");  // unshift return length of array after adding new element
console.log(myBag, length);

// Remove element (Return removed element)
let pop_ele = myBag.pop();
console.log(pop_ele);
console.log(myBag);

let shift_ele = myBag.shift(); // Return removed element
console.log(shift_ele);
console.log(myBag);

// Get element index (return index of element)
console.log(myBag.indexOf("Wallet"));
console.log(myBag.indexOf("Pen"));

// Includes (Return boolean value)
let isThere = myBag.includes("Pen");
console.log(isThere);
let isThere_ = myBag.includes("Wallet");
console.log(isThere_);
*/

/* 41. challange 6 (Answer) */

// 42 & 43. Introduction to Objects and Dot vs Bracket Notation
/*
const myInfo = {
    // key [property] : value, (key value pair)
    "name" : "Sukhman",
    age : 25,
    job : "Developer",
    "company" : "Buzzclan"
};
console.log(myInfo);

// add new property
myInfo.hobby = "Animator";
console.log(myInfo);

// Access via Dot vs Bracket Notation.
console.log(myInfo.age);
console.log(myInfo.name);
console.log(myInfo['job']);
console.log(myInfo['company']);

if (myInfo.hasCar) {
    console.log(myInfo.hasCar);
}
else
{
    console.log("Buy Santro!");
    myInfo.hasCar = "Santro";
}

console.log(myInfo);

myInfo["hasDriverLicense"] = "Yes";
console.log(myInfo);
*/

// 44. Objects Methods
/*
const d_ = new Date();
let year_ = d_.getFullYear();
// key [property] : value, (key value pair)
const myInfo_ = {
    "name" : "Sukhman",
    age : (birthYear) => year_-birthYear,
    job : "Developer",
    "company" : "Buzzclan"
};

myInfo_.age(1998);
console.log(myInfo_);
*/
/*
//  this (keyword) : point/equal to object on which the method is called.
const d = new Date();
let year = d.getFullYear();
const myInfo = {
  // birthYear: 1998, // use ex property
  name: "Sukhman",
  age: function (birthYear = "") {
    this.birthYear = 1998;
    console.log(this);
    return year - this.birthYear;
  },
  job: "Developer",
  company: "Buzzclan",
  summary: function () {
    return (
      `${myInfo.name} is ${myInfo.age()}year old and a ${myInfo.job} in a ${
        myInfo.company
      } company and he can ${myInfo.age()>=18?"drive":
    "not drive"}`
    );
  },
};

// console.log(myInfo.age());
// console.log(myInfo.birthYear);
console.log(myInfo.summary());
*/

/* 45. Challange 7 (Answer) */

// 46. Iteration: The Loop
/*
let j = 0;
for (let liftUp = 1; liftUp <=10; liftUp++) {
    console.log(`LiftUp🏋️`);
    console.log(`LiftDown🏋️${++j}`);
}
console.log(j);
*/

// 47. Looping array, Breaking and Continuing, adding element to new array (simple and via push or unshift method)
/*
const arr1 = [];
const arr2 = Array();
const arr3 = Array();
const info = ['Sukhman', 25, null, true,BigInt(9999),undefined];
for (let index = 0; index < info.length; index++) {
    console.log(`At index ${index} value is ${info[index]} and type is ${typeof(info[index])}`);
    arr1[index] = typeof(info[index]);
    arr2.push(index);
    arr3.unshift(index);
}
console.log(arr1);
console.log(arr2);
console.log(arr3);
*/
/*
const d_ = new Date();
let currentYear = d_.getFullYear();
const years = [1991,1993,1998];
const calcAge = (birthYear) => currentYear - birthYear;
const ageIs = Array();
for (let index = 0; index < years.length; index++) {
    ageIs.push(calcAge(years[index]));
}
console.log(ageIs);
*/
/*
const container = [1,2,3,4,5,Symbol("@"),6,7,8,9,"one","two","three"];
const new_container = Array();
for (let index = 0; index < container.length; index++) {
    if (typeof(container[index]) === "symbol") {
        continue;
    }
    else if(typeof(container[index]) === "string"){
        break;
    } 
    else {
        new_container.push(container[index]);
    }
}
console.log(container);
console.log(new_container);
*/

// 48. Looping Backwards and Loops in Loops
/*
const container = [1,2,3,4,5,Symbol("@"),6,7,8,9,"one","two","three"];
const container_new = Array();
for (let index = container.length-1; index >= 0; index--) {
    if (typeof(container[index]) === "symbol") {
        continue;
    } 
    else {
        container_new.push(container[index]);
    }
}
console.log(container);
console.log(container_new);
*/
/*
let num = 5;
for (let index = 0; index < num; index++) {
    for (let indexj = 0; indexj < index; indexj++) {
        console.log("a");
    }
    console.log("\n");
}
*/

// 49. The while Loop
/*
let i = 1;
const num = 18;
while (i<=20) {
    console.log(`${num} x ${i} = ${num*i}`);
    i++;
}
*/
/*
let dice = Math.trunc(Math.random()*6)+1;
while (dice !== 6) {
    console.log(`You roled a dice and get ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if (dice === 6) {
        console.log(`Loop is about to end!`);
    }
}
*/
/*
let dice = function() {
    return Math.trunc(Math.random()*6)+1;
};
let _dice = dice();
while (_dice !== 6) {
    console.log(`You roled a dice and get ${_dice}`);
    _dice = dice();
    if (_dice === 6) {
        console.log(`Loop is about to end!`);
    }
}
*/

// 50 . Challange 8 (Answer)

