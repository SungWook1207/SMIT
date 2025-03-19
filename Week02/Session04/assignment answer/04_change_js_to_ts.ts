// 03_rock_paper_scissor.js 를 타입 스크립트로 전환하기

function playGame(userChoice: string): string {
    const choices: string[] = ["가위", "바위", "보"];
    const computerChoice: string = choices[Math.floor(Math.random() * 3)];
    let result: string = "";

    // 입력 검증. includes에서 에러가 난다면 tsconfig.json 파일 필요
    if (!choices.includes(userChoice)) {
        return "올바른 입력이 아닙니다. '가위', '바위', '보' 중에서 선택해주세요.";
    }

    // 승패 판정 로직
    if (userChoice === computerChoice) {
        result = "비겼습니다!";
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        result = "이겼습니다!";
    } else {
        result = "졌습니다.";
    }

    return `당신: ${userChoice}, 컴퓨터: ${computerChoice}, 결과: ${result}`;
}

// ✅ 테스트 실행
console.log(playGame("가위"));  // "당신: 가위, 컴퓨터: 바위, 결과: 이겼습니다!" (예제)
console.log(playGame("보"));    // "당신: 보, 컴퓨터: 가위, 결과: 졌습니다."
console.log(playGame("잘못된 입력")); // "올바른 입력이 아닙니다. '가위', '바위', '보' 중에서 선택해주세요."
