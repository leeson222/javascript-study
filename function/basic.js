// 사용예제1
function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용예제2

// let lastName = "김";
// let firstName = "지수";
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

// 사용예제3

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let firstName2 = "김";
let lastName2 = "지수";
console.log(fullName(firstName2, lastName2));

let firstName3 = "이";
let lastName3 = "송이";
console.log(fullName(firstName3, lastName3));
