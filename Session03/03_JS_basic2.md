# 2주차 3세션: JavaScript 조건문 & 반복문

## 📌 세션 개요
- **주제**: JavaScript 조건문과 반복문
- **목표**: 조건문(`if-else`, `switch`), 반복문(`for`, `while`)을 이해하고 활용할 수 있다.
- **시간**: 2시간
- **필수 도구**: Code Sandbox, 인터넷 연결

---

## 1. 오프닝 (10분)
### ✅ 강의 목표
- `if-else` 조건문과 `switch` 문을 이해하고 활용
- `for` 문과 `while` 문을 사용하여 반복적인 작업 수행
- `map`과 `forEach`의 차이점 이해
- 조건문과 반복문을 조합하여 간단한 프로그램 구현

### ✅ JavaScript에서 조건문과 반복문이 중요한 이유
- 조건문은 **특정 조건에서 코드 실행 여부를 결정**하는 역할을 한다.
- 반복문은 **반복적인 작업을 자동화**하여 코드의 효율성을 높인다.

---

## 2. 조건문 (40분)

### 🔹 if-else 조건문
```js
let age = 20;

if (age >= 18) {
    console.log("성인입니다.");
} else {
    console.log("미성년자입니다.");
}
```

### 🔹 else-if 활용한 다중 조건
```js
let score = 85;

if (score >= 90) {
    console.log("A 학점입니다.");
} else if (score >= 80) {
    console.log("B 학점입니다.");
} else if (score >= 70) {
    console.log("C 학점입니다.");
} else {
    console.log("F 학점입니다.");
}
```

### 🔹 switch 문 (가독성 개선)
```js
let day = "월요일";

switch (day) {
    case "월요일":
        console.log("한 주의 시작입니다!");
        break;
    case "금요일":
        console.log("주말이 다가옵니다!");
        break;
    case "토요일":
        console.log("휴식 시간입니다!");
        break;
    case "일요일":
        console.log("주일입니다!");
        break;
    default:
        console.log("일반적인 하루입니다.");
}
```

---

## 3. 반복문 (40분)

### 🔹 for 문을 이용한 반복 실행
```js
for (let i = 1; i <= 5; i++) {
    console.log("반복 중: ", i);
}
```

### 🔹 while 문을 이용한 반복 실행
```js
let count = 1;
while (count <= 5) {
    console.log("현재 count: ", count);
    count++;
}
```

### 🔹 map()과 forEach() 차이점
```js
const numbers = [1, 2, 3, 4, 5];

// map(): 새로운 배열을 반환
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// forEach(): 새로운 배열을 반환하지 않음
numbers.forEach(num => {
    console.log(num * 2); // 각 요소를 2배로 출력
});
```

---

## 4. 실습: js와 html 연동 (30분)

- 03_JS_connect.html & js 참조
---

## 5. 마무리 (20분)
### ✅ 오늘 배운 내용 정리
- `if-else`, `switch` 조건문
- `for`, `while` 반복문
- `map()`과 `forEach()` 차이점
- 조건문과 반복문을 활용한 가위바위보 게임 구현

### ✅ 과제
1. **사용자로부터 숫자를 입력받아 1부터 해당 숫자까지의 합을 구하는 프로그램 작성**
2. **컴퓨터가 1~100 사이의 숫자를 랜덤으로 선택하고, 사용자가 맞출 때까지 반복하는 업다운 게임 구현**

---
