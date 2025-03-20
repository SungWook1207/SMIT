/* ---------- 📌 변수와 데이터 타입 ---------- */

// console.log 설명
console.log("JavaScript 기초 시작!");

// 변수 선언
let name = "유성욱";
const age = 25;
var isStudent = true; // ES6 이후로는 쓰이지 않음.

// 데이터 타입
let message = "안녕하세요!"; // String
let score = 100; // Number
let isPassed = true; // Boolean
let hobbies = ["코딩", "독서", "영화 감상"]; // Array
let person = { name: "유성욱", age: 25 }; // Object
let not_defined; // undefined 변수가 선언되었지만 값이 없는 경우
let empty = null; // 변수가 비어있음을 명확하게 표현할 때 값이 "없음"을 명시적으로 설정

// 콘솔 출력
console.log("이름: ", name);
console.log("나이: ", age);
console.log("학생인가요?", isStudent);
console.log("취미 목록: ", hobbies);
console.log("변수는 선언했지만 값을 설정하지 않았어요: ", not_defined);
console.log("이것은 값이 없는 변수입니다: ", empty);


/* ---------- 📌 연산자 ---------- */

let num1 = 10;
let num2 = 3;

console.log("덧셈: ", num1 + num2);
console.log("뺄셈: ", num1 - num2);
console.log("곱셈: ", num1 * num2);
console.log("나눗셈: ", num1 / num2);
console.log("몫: ",  Math.floor(num1 / num2));
console.log("나머지: ", num1 % num2);
console.log("증가 연산: ", ++num1);
console.log("2 증가 연산: ", num1 += 2);
console.log("감소 연산: ", --num2);
console.log("3 감소 연산: ", num2 -= 3);