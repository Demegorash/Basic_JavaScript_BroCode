//  const = is a variable that cannot be changed once assigned

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle here: ");
// radius = Number(radius);
// circumference = 2 * PI * radius;


document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}