// rock, paper, scissors with function 
const initGame = () =>{
    const startGame = confirm("Shall we play the game?");
    startGame ? playGame() : alert("Ok, may be next time!");
};

// game flow function 
const playGame = () =>{
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === "") {
            invalidChoice();
            continue;

        }
        if(!playerChoice){
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice , computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        } else {
            thanksforPlaying();
            break;
        }

    }
};

const getPlayerChoice = () => {
    return prompt("Plase Enter Rock, Paper or scissors");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    } else{
        return false;
    }
};

const decideNotToPlay = () => {
    alert("I guess you don't want to play");
};

const evaluatePlayerChoice = (playerChoice) => {
    if(
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"

    ){
        return playerChoice;
    } else{
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter the rock, paper or scissors!");
};

const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock","paper","scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner = 
        player === computer 
        ? `player : ${player}\nComputer : ${computer}\nGame Tie!`
        : player === "rock" && computer === "paper"
        ? `player : ${player}\nComputer : ${computer}\nComputer Wins!`
        : player === "paper" && computer === "scissors"
        ? `player : ${player}\nComputer : ${computer}\nComputer Wins!`
        : player === "scissors" && computer === "rock"
        ? `player : ${player}\nComputer : ${computer}\nComputer Wins!`
        : `player : ${player}\nComputer : ${computer}\nPlayer Wins!`

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play again?");
};

const thanksforPlaying =() => {
    alert("Thanks for playing the game!");
};

initGame();