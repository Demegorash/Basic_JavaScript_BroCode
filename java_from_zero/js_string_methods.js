// String methods allow you to manipulate and work with text (strings)

let userName = "Demegorash    ";
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);

console.log(userName.charAt(2));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.length);
console.log(userName);

let result1 = userName.startsWith(" ");
let result2 = userName.endsWith(" ");
let result3 = userName.includes(" ");
console.log(result1);
console.log(result2);
console.log(result3);

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/")
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);