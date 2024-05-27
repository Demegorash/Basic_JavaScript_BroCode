// If statements are conditions that defines if something is true or falso in order to execute some code
/*
let age = 13;

if(age >= 18) {
    console.log("You are old enough to enter this site");
}
else {
    console.log("You must be 18+ to enter this site");
}
*/

/*
let time = 14;

if(time < 12) {
    console.log("Good morning!!!");
}
else {
    console.log("Good afternoon!!!");
}

let isStudent = true

if(isStudent) {
    console.log("You are a student!")
}
else {
    console.log("You are not a student!")
}

// Nested

let age = 18;
let hasLicense = true;

if(age >= 16) {
    console.log("You are ready to drive a car!");

    if(hasLicense) {
        console.log("You have your license!");
    }
    else {
        console.log("You do not have a license yet!");
    }
}
else {
    console.log("You must be 16+ in order to drive a car!")
}
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = `Your are too old to enter this site!`;
    }
    else if(age == 0) {
        resultElement.textContent = `You cannot enter, you were just born!`;
    }
    else if(age >= 18) {
        resultElement.textContent = `You are old enough to enter this site!`;
    }
    else if(age < 0) {
        resultElement.textContent = `Your age cannot be below 0`;
    }
    else {
        resultElement.textContent = `You must be 18+ to enter this site!`;
    }
}