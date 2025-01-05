// 조건문 Conditional statement
// if(조건){}
// if(조건){}else{}
// if(조건){}else if(조건2) {} else {}

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
