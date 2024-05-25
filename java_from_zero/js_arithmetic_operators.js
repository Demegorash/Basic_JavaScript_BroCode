// arithmetic operators are operands like + or - and * with /

// for example: 11 = x + 5;

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 3;

//let extraStudents = students % 3;

//students += 3;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

students++;
students--;

console.log(students);
//console.log(extraStudents);

/* 
operators precedence
1. parenthesis ()
2. exponents
3. multiplication, division, module
4. addition and substraction
*/

let result1 = 1 + 2 * 3 + 4 ** 2;
let result2 = 12 % 5 + 8 / 2;

console.log(result1);
console.log(result2);