//  ternary operator is a shortcut to if and else statements and it helps in order to assign a variable based on a condition ? code if true or code if false.

let age = 12;
let message = age >= 18 ? "You are an adult!" : "You are a minor!";

console.log(message);

let time = 10;
let greeting = time < 12 ? "Good Morning!" : "Good afternoon!";

console.log(greeting);

let isStudent = true;
let statusStudent = isStudent ? "You are a student" : "You are not a student!";

console.log(statusStudent);

let purchaseAmount = 200;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);