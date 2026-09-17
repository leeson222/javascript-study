/**
 * 객체 타입의 얕은 복사
 * 객체를 활용하는 코드의 오류 방지를 위해 별도의 참조 주소를 생성해서 복사하는 방식
 */

const chris = {
  name: "chris",
  age: 18,
  gender: "male",
};

const jane = chris;
jane.name = "jane";
jane.age = "20";
jane.gender = "female";

function getChrisInfo() {
  console.log("chris info", chris);
}

getChrisInfo();

// Object.assign을 활용하는 방식
// Object.assign(대상객체, ...복사할객체)
// 최종적으로 합친 객체를 반환한다.

const tony = {
  name: "tony",
  age: 24,
  gender: "male",
};

// 같은 키가 있는 경우 뒤에 선언된 키 값을 override한다
// {} 참조 주소를 하나 더 열어서 복사한 값을 반환한다
// es6 이후로는 잘 활용하지 않는 방식
const sam = Object.assign({}, tony, { name: "sam", age: 18 });
sam.age = 30;
console.log("sam", sam);
console.log("tony", tony);

// spread 문법을 활용한 객체의 복사
// ...을 활용한 객체의 값을 분리해내는 방식
// 같은 데이터 타입끼리만 활용 가능 (object는 object끼리 array는 array끼리)

const jerry = {
  name: "jerry",
  age: 30,
  gender: "male",
};

const david = {
  ...jerry,
  name: "david",
};

david.age = 23;

console.log(jerry);
console.log(david);

// 중첩된 객체의 얕은 복사
const animal = {
  name: "luna",
  age: 30,
  gender: "male",
  color: {
    red: 100,
    green: 50,
    blue: 100,
  }, // ax000001
}; // ax000000

const luna = {
  ...animal,
  age: 24,
  color: {
    ...animal.color,
  },
};

luna.color.red = 255;
luna.color.blue = 200;

console.log(animal);
console.log(luna);

// 다음 시간에
// 배열의 얕은 복사

// !!숙제!! 중첩 객체를 좀 더 복잡하게 설계해서 내부의 값을 얕은 복사로 서로 분리시켜 보기

// 사람

const judy = {
  name: "judy",
  gender: "female",
  hair: {
    color: {
      topOfHead: "black",
      tipOfHead: "brown",
    },
    length: "long",
  },
  eyes: {
    color: {
      pupil: "black",
      iris: "brown",
    },
    doubleEyelid: "yes",
    eyelashes: "long",
  },
};

const lucy = {
  ...judy,
  name: "lucy",
  hair: {
    ...judy.hair,
    color: {
      ...judy.hair.color,
      middle: "yellow",
    },
  },
  eyes: {
    ...judy.eyes,
    color: {
      ...judy.eyes.color,
    },
  },
};

const cherry = {
  ...lucy,
  name: "cherry",
  hair: {
    ...lucy.hair,
    color: {
      ...lucy.hair.color,
    },
  },
  eyes: {
    ...lucy.eyes,
    color: {
      ...lucy.eyes.color,
      shadow: "pink",
    },
  },
};

lucy.hair.color.topOfHead = "red";
lucy.eyes.color.pupil = "brown";

cherry.hair.color.middle = "khaki";

console.log(judy);
console.log(lucy);
console.log(cherry);
