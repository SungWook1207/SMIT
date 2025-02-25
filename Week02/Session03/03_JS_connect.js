function updateInfo() {
    let name = prompt("이름을 입력하세요:");
    let age = prompt("나이를 입력하세요:");
    document.getElementById("info").innerText = `이름: ${name}, 나이: ${age}세`;
}

function multiply() {
    let num1 = prompt("첫번째 숫자:");
    if (isNaN(parseInt(num1))) {
        window.alert("숫자를 기입해주세요!")
        return;
    }
    let num2 = prompt("두번째 숫자:");
    if (isNaN(parseInt(num2))) {
        window.alert("숫자를 기입해주세요!")
        return;
    }
    document.getElementById("multiplication").innerText = `${num1}x${num2}= ${parseInt(num1)*parseInt(num2)}`;
}