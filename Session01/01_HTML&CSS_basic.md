# 코딩 부트캠프 1주차 1세션: HTML & CSS Basics

## 📌 세션 개요
- **주제**: HTML & CSS 기초
- **목표**: 웹 개발의 기본 개념을 이해하고, HTML과 CSS를 사용하여 간단한 웹페이지를 만드는 방법을 익힌다.
- **시간**: 2시간
- **필수 도구**: Code Sandbox, 인터넷 연결

---

## 1. 오프닝 (10분)
### (1) 인사 및 부트캠프 소개
"이번 부트캠프에서 여러분이 웹 개발을 배우고 직접 프로젝트를 만들 수 있도록 도와드릴 강사입니다.  
이 과정은 12주 동안 진행되며, 최종 목표는 Next.js를 활용하여 간단한 웹 애플리케이션을 만드는 것입니다."

### (2) 학습 목표
✅ HTML과 CSS의 역할과 차이점 이해하기  
✅ 기본적인 HTML 태그 사용법 익히기  
✅ CSS를 이용한 스타일링 기초 배우기  
✅ 실습을 통해 간단한 웹 페이지 만들기

### (3) Code Sandbox 가입
개인 이메일로 Code Sandbox에 가입하고 수업을 진행한다.

---

## 2. HTML 기초 (30분)
### (1) HTML이란?
- HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어.
- 웹사이트는 HTML 문서를 브라우저가 해석하여 화면에 표시하는 방식으로 동작.

### (2) HTML 기본 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내 첫 번째 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이것은 HTML을 사용하여 만든 웹페이지입니다.</p>
</body>
</html>
```

### (3) 주요 HTML 태그 소개
- 제목 태그: `<h1>` ~ `<h6>`
- 문단 태그: `<p>`
- 링크 태그: `<a href="https://www.google.com">구글</a>`
- 이미지 태그: `<img src="image.jpg" alt="설명">`
- 목록 태그: `<ul>`, `<ol>`, `<li>`
- 테이블 태그: `<table>`, `<tr>`, `<td>`
- 입력 폼 태그: `<input>`, `<textarea>`, `<button>`

### (4) 실습: Google Slide를 이용해서 HTML box 구조 파악하기
1. structure.jpg를 보여주고 어떤 식으로 tag들이 구성되어 있는지 파악하기

---

## 3. CSS 기초 (30분)
### (1) CSS란?
- CSS(Cascading Style Sheets)는 HTML 요소의 스타일(색상, 크기, 레이아웃 등)을 지정하는 언어.
- HTML이 웹페이지의 뼈라면, CSS는 피부, 옷을 담당. (JS 는 근육)

### (2) CSS 적용 방법
1. **인라인 스타일**
```html
<p style="color: blue;">이 문장은 파란색입니다.</p>
```
2. **내부 스타일**
```html
<style>
  p { color: blue; }
</style>
```
3. **외부 스타일**
```html
<link rel="stylesheet" href="styles.css">
```

### (3) 기본적인 CSS 속성
- 색상 변경: `color: red;`
- 배경색 변경: `background-color: yellow;`
- 글꼴 스타일: `font-size: 20px;`, `font-weight: bold;`
- 여백 조정: `margin: 10px;`, `padding: 5px;`
- 테두리 추가: `border: 1px solid black;`

### (4) 실습: CSS 적용하기
- `styles.css` 파일을 만들어서 기본 스타일 지정
- HTML 파일과 연결 후 브라우저에서 확인

```css
body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
  text-align: center;
}

p {
  font-size: 18px;
}
```

---

## 4. HTML + CSS 실습 (30분)
### (1) 간단한 웹페이지 만들기
01_HTML&CSS_activity.html 참조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML & CSS 연습</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>내 웹사이트</h1>
    </header>
    <main>
        <p>이것은 첫 번째 웹페이지입니다. HTML과 CSS를 배워서 만든 사이트입니다.</p>
        <a href="https://www.google.com">구글로 이동</a>
    </main>
</body>
</html>
```

```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #e3f2fd;
    text-align: center;
}

h1 {
    color: #0277bd;
}

p {
    font-size: 18px;
}
```

---

## 5. 마무리 (20분)
### (1) 오늘 배운 내용 정리
✅ HTML의 역할과 기본 태그  
✅ CSS를 활용한 스타일 적용 방법  
✅ HTML + CSS를 사용하여 간단한 웹페이지 제작

### (2) Q&A (10분)
- 궁금한 점이 있으면 질문하세요!

### (3) 과제 안내
- **과제**: 자신을 소개하는 웹페이지를 HTML과 CSS를 활용하여 만들어보기
    - 이름, 주기도문 포함
    - 스타일 적용 (배경색, 글꼴 크기 조정)
    - 제출 방법: 다음 수업 전에 Code Sandbox에 저장
    - 01_profile_page_example.html을 예제로 보여주기
