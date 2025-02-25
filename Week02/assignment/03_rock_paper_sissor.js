import readline from "readline";

function playGame() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("가위, 바위, 보 중 하나를 선택하세요:", (userChoice) => {
        let choices = ["가위", "바위", "보"];
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        // 과제 부분
        if (userChoice === computerChoice) {
            result = "비겼습니다!";
        } else if (
            (userChoice === "가위" && computerChoice === "보") ||
            (userChoice === "바위" && computerChoice === "가위") ||
            (userChoice === "보" && computerChoice === "바위")
        ) {
            result = "이겼습니다! 🎉";
        } else {
            result = "졌습니다. 😢";
        }
        // 과제 부분

        console.log(`당신: ${userChoice}\n컴퓨터: ${computerChoice}\n결과: ${result}`);
        rl.close();
    })

}

// playGame();
