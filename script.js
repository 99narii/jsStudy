//랜덤번호 지정
//유저가 번호를 입력, go 라는 버튼을 누름
//만약에 유저가 랜덤 번호를 맞추면 맞췄습니다!!
//랜덤번호 < 유저번호 라면 Down
//랜번번호 > 유저번호 라면 Up
//Reset 버튼을 누르면 게임 재시작
//5번의 기회를 다 쓰면 게임 끝
//유저가 1 - 100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않음
//유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지 않음

let computerNum = 0
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
let history= [];
let chances = 5;
let gameOver = false;
playButton.addEventListener("click", play)
// 함수를 매개변수 처럼만 넘기기때문데 play() 괄호 사용하지 않음
resetButton.addEventListener("click", reset)

userInput.addEventListener("focus", function(){userInput.value =""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100 + 1);
    console.log("정답 : ", computerNum)
} 

function play() {
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1 - 100 사이의 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 값입니다. 다시 입력해주세요."
        return;
    }
    chances --;
    chanceArea.textContent=`남은 기회 : ${chances} 번`
    if(userValue > computerNum) {
        resultArea.textContent="Down!"
    } else if(userValue < computerNum) {
        resultArea.textContent="Up!"
    }else{
        resultArea.textContent="정답!"
        gameOver = true;
    }

    //유저가 입력한 값을 저장
    history.push(userValue);
    console.log(history);

    if(chances < 1) {
        gameOver= true;
    }
    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    //user Input창을 깨끗하게 정리
    userInput.value= ""
    pickRandomNum()

    resultArea.textContent="결과값이 여기 나옵니다."
}

pickRandomNum();