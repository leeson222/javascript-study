// 삼항 조건 연산자 Ternary operator
// 조건식 ? 참인 경우 : 거짓인 경우
let fruit = "apple";
if (fruit === "apple") {
  console.log("사과");
} else {
  console.log("오렌지");
}

if (fruit === "orange") {
  console.log("사과");
} else {
  console.log("오렌지");
}

let fruit2 = "d";
if (fruit2 === "apple") {
  console.log("사과");
} else if (fruit2 === "orange") {
  console.log("오렌지");
} else {
  console.log("암것도아님");
}

// 참이면 출력, 참이 아니면 출력이 안 됨
if (2 < 1) {
  console.log("출력되면 안됨!!");
}

fruit === "apple" ? console.log("사과") : console.log("오렌지");

let text = fruit === "apple" ? "사과" : "오렌지";
console.log(text);

// 퀴즈
let num = 2;
// num의 숫자가 짝수면 엄지, 홀수라면 검지를 출력하도록
// if
// ternary

if (num % 2 === 0) {
  console.log("엄지");
} else {
  console.log("검지");
}

let numText = num % 2 === 0 ? "엄지" : "오렌지";
console.log(numText);
