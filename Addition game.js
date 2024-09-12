let firstNumberElement = document.getElementById('firstNumber');
let secondNumberElement = document.getElementById('secondNumber');
let userInputElement = document.getElementById('userInput');
let gameResultElement = document.getElementById('gameResult');

function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber;
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartGame();

function checkResult() {
    let isEqualTo = parseInt(firstNumberElement.textContent) + parseInt(secondNumberElement.textContent);
    let userInputNumber = parseInt(userInputElement.value);
    if (userInputNumber === isEqualTo) {
        gameResultElement.textContent = "Congratulation! You got it right"
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try Again";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}