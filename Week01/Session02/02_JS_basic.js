// 2️⃣ JavaScript란 무엇인가?
/*
👉 JavaScript는 웹사이트에 동적인 기능을 추가하는 프로그래밍 언어이다.
👉 HTML & CSS가 웹사이트의 구조와 디자인을 담당한다면, JavaScript는
   인터랙티브한 요소(버튼 클릭, 애니메이션, 폼 제출 등)를 담당한다.
👉 HTML이 뼈, CSS가 피부, JS가 근육이라고 생각하면 된다.
👉 주요 특징:
   - 동적 프로그래밍 언어
   - 클라이언트 및 서버 측에서 실행 가능 (Node.js 사용 시 서버에서도 가능) // 그래서 우리가 JS로 교육을 받는다
   - 다양한 API 및 라이브러리를 활용 가능
   - JavaScript는 위에서 아래로 순차적으로 실행됨.
   - 하나의 명령이 끝나면 다음 명령을 실행하는 절차적(Procedural) 프로그래밍 방식.
   - 코드 실행 중 오류가 발생하면 해당 지점에서 멈추고 오류를 표시함.
*/

// 💡 JavaScript 기초 - 변수와 데이터 타입

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
let person = { name: "홍길동", age: 25 }; // Object
let not_defined; // undefined 변수가 선언되었지만 값이 없는 경우
let empty = null; // 변수가 비어있음을 명확하게 표현할 때 값이 "없음"을 명시적으로 설정

// 콘솔 출력
console.log("이름: ", name);
console.log("나이: ", age);
console.log("학생인가요?", isStudent);
console.log("취미 목록: ", hobbies);
console.log("변수는 선언했지만 값을 설정하지 않았어요: ", not_defined);
console.log("이것은 값이 없는 변수입니다: ", empty);

// /*
// 💡 실습 3: 연산자
// --------------------------------------------*/
let num1 = 10;
let num2 = 3;

console.log("덧셈: ", num1 + num2);
console.log("뺄셈: ", num1 - num2);
console.log("곱셈: ", num1 * num2);
console.log("나눗셈: ", num1 / num2);
console.log("나머지: ", num1 % num2);
console.log("증가 연산: ", ++num1);
console.log("감소 연산: ", --num2);