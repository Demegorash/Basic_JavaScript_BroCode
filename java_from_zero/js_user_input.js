// We can accept user input

// 1.  Easy way with a window prompt
// 2.  Proffesional way using the HTML textboxes

// 1.  Easy way with a window prompt

// let username = window.prompt("What is your username");
// console.log(username);

// 2.  Proffesional way using the HTML textboxes

let username;

/*
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
}
*/

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH2").textContent = `Hello ${username}`
}