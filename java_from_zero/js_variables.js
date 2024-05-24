// variable = A container that stores a value and behaves as if it were the value it contains

// 1. declaration let x;
// 2.  assignment x = 100;

let x;

x = 123;

console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(`You are ${age} years old!!!`);  // Check this `` as different from '' and ""

console.log(`The price is $${price}.`);
console.log(`Your gpa is ${gpa}.`);

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

let firstName = "Demer";
let favoriteFood = "Pizza";
let email = "demer@demer.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}.`);
console.log(`My favorite food is ${favoriteFood}!`);
console.log(`My email for all is ${email}`);

let online = true;
console.log(typeof online);
console.log(`${firstName} is online: ${online}`);

let forSale = true;
console.log(`Is this ${favoriteFood} for sell?: ${forSale}`);

let isStudent = true;
console.log(`Enrolled: ${isStudent}`);

let fullName = "Demer Demegorash";
let experience = 46;
let student = true;

document.getElementById("p1").textContent = `Your Name is: ${fullName}.`;
document.getElementById("p2").textContent = `You have ${experience} years of experience.`;
document.getElementById("p3").textContent = `You are currently studing programming languages: ${student}.`;