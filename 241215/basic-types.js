console.log("run basic-types");

// literal
const str = "string";
const num = "123";
const bool = "true";
const nul = "null";
const un = "undefined";
const sym = Symbol("symbol");

const arr = [];

// 원시타입
//변수에 할당된 값 그대로 메모리에 저장됨

//원시타입 값의 복사
let str2 = str; // 'string'
str2 = "string2";

// str: 'string'
// str2: 'string2'

// 객체 타입
// 선언 시점에 메모리상의 참조 주소가 생성됨
// 객체를 복사하는 경우 객체의 값 그대로 복사하는 게 아니라 참조주소가 복사됨
// 객체 타입 값의 복사
const obj = {};
const obj2 = obj;
obj2.a = 10;

// obj.a: 없다
// obj2.a: 10

console.log("obj", obj);
console.log("obj2", obj2);

// object
// key, value의 한쌍으로 이뤄진 자료 구조
// { key: value, key2: value2 }
// value에는 모든 데이터 타입이 들어갈 수 있다
// 길이(length)를 가지고 있지 않다.
// index가 없다.

const obj3 = {
  a: "str",
  b: 10,
  c: false,
  d: null,
  e: undefined,
  f: {
    a: 10,
  },
  g: [],
  h: function () {},
  i: {
    a: 20,
  },
};

// 객체의 접근 방식
// dot(.)을 활용한 체이닝 접근 방식
// 대괄호[]내의 string key를 활용한 접근 방식

console.log("obj3.a", obj3.a);
console.log("obj3.a", obj3.f.a);
console.log("obj3 b", obj3["b"]);

const obj3I = "i";

console.log("obj3 i a", obj3[obj3I]["a"]);

// array
// 길이가 있고 index로 접근 가능
// 데이터는 모든 데이터 타입을 넣을 수 있다
// index는 언제나 0부터 시작하는 순서를 의미한다

const arr2 = [
  "str",
  10,
  true,
  null,
  undefined,
  { a: 99, b: [40] },
  [50, { b: 30 }],
  function () {},
];
// index는 0에서 7까지
// length는 8

console.log("arr2.length", arr2.length);

// 배열의 접근
// 오로지 index로만 접근 가능하다

console.log("index 0", arr2[0]);
console.log("index 5", arr2[5]); // { a: 99}
console.log("index 6", arr2[6]); // [50]

console.log("index 5 -> a", arr2[5].a);
console.log("index 6 -> 0", arr2[6][0]);

console.log("index 5 -> b -> 0", arr2[5].b[0]);
console.log("index 6 -> 0 -> 1 -> 0", arr2[6][1].b);

// 호이스팅 (hoisting)
// 런타임 동작(javascript 실행) 전에 변수의 정합성 판단을 위해 전부 상단으로 끌어올려 검사하는 개념
// 선언식 함수는 가장 최상단으로 끌어올린다
// const, let은 순서를 보장한다

// function
// 선언 방법이 3가지 정도 있다
// 선언식 함수, 표현식 함수, 화살표 함수
// 선언 이후에 실행을 해야만 동작한다
// 함수는 반드시 return 값이 있다

// 선언식 함수
// function이라는 예약어를 사용해서 함수를 선언하는 방식

// 실행
// run();
console.log("run", run());

// 선언
// 기명함수
function run() {
  // 블럭 내부에 코드 작성
  console.log("function run()");
  // return을 넣으면 함수는 바로 종료된다.
  // return이 없으면 없으면 암묵적으로 반드시 undefined를 return한다.
  // return undefined; (void 함수)
  return 10;
}

// 표현식 함수
// 변수에 익명함수 방식으로 할당하는 함수
const start = function () {
  console.log("function start()");
};

// start();
console.log("start", start());

// 화살표 함수
// function의 선언 방식을 간결하게 해 주는 선언 방식  (es6 이후부터)

const load = () => {
  console.log("function load()");
};

// load();
console.log("load", load());

// const, let
// const 상수 - 변하지 않을 값 (수정불가)
// let 변수 - 변경 가능한 값
// const a = 1;
// a = 10; (xxx)

let b = 10;
console.log("b", b);
b = 20;
console.log("b", b);
b = 30;
console.log("b", b);

// let은 초기값을 할당하지 않아도 기본적으로는 undefined가 할당됨
let c;
console.log("c", c);

// const는 선언 당시 반드시 초기값 할당이 필요함
// const d;
