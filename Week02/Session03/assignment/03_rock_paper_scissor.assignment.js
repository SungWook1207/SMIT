function playGame(userChoice) {
    let choices = ["가위", "바위", "보"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // TODO: if 구문과 Math.floor 활용하여 가위바위보 게임 구현하기

    return `당신: ${userChoice}, 컴퓨터: ${computerChoice}, 결과: ${result}`;
}

// 해당 결과가 나와야 합니다
console.log(playGame("가위")); // "당신: 가위, 컴퓨터: 바위, 결과: 이겼습니다!" (이겼을 경우)
console.log(playGame("보"));   // "당신: 보, 컴퓨터: 가위, 결과: 졌습니다." (졌을 경우)
console.log(playGame("잘못된 입력")); // "올바른 입력이 아닙니다. '가위', '바위', '보' 중에서 선택해주세요."

