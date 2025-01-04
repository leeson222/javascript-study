// 연산자

//리터럴 = 코드에서 값을 나타내는 표기법
// 표현식 = 값으로 평가될 수 있는 문

let num = 1 + 1;
console.log(num);

let b; //선언문
b = 2; //표현식, 할당문
console.log(b);

//산술연산자(Arithmetic operators)

// +, -, *, /, %. **

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 ** 2);
console.log(5 % 2);
console.log(Math.pow(5, 2));

// + 연산자 주의점!
let text = "두개의" + "문자를";
console.log(text);
text = "1" + 1; // 숫자와 문자열을 더하면 문자열로 반환됨
console.log(text);

//단항연산자 (unary operators)
// + (양), -(음), !(부정)

let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a;
console.log(-a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음

console.clear();
console.log(+false); //0
console.log(+null); //0
console.log(+""); //0
console.log(+true); //1
console.log(+"text"); //NaN
console.log(+undefined); //NaN

//할당 연산자 (Assignment operators)
let aa = 1;
aa = aa + 2;
console.log(aa);
aa += 2; //aa = aa + 2;
console.log(aa);
aa *= 2;
console.log(aa);

//증감 연산자(Increment + Decrement operators)
let aaa = 0;
console.log(aaa);
aaa++;
aaa = aaa + 1;
console.log(aaa);
aaa--;
aaa = aaa - 1;
console.log(aaa);

console.clear();
// 주의!
// aaa++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++aaa 값을 먼저 증가하고, 필요한 연산을 함

c = 0;
let d = c++;
console.log(d);
console.log(c);
