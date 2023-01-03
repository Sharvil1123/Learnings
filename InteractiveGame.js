let playGame = confirm("Do you want to play Rock, Papers and Scissors?");
if(playGame){
    //play
    let playerChoice = prompt("What is your choice?");
    if(playerChoice){
        //play
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "scissors" || playerOne === "papers"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer  = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "Paper"
            :"scissors";
            
            let result = 
            playerOne === computer
            ? "TIE GAME!"
            :playerOne === "rock" && computer === "paper"
            ? `playerOne = ${playerOne}\nComputer = ${computer}\nPlayerOne Wins!`
            :playerOne === "papers" && computer === "scissors"
            ?`playerOne = ${playerOne}\nComputer = ${computer}\nComputer Wins!`
            :playerOne === "scissors" && computer === "rock"
            ?`playerOne = ${playerOne}\nComputer = ${computer}\nComputer Wins!`
            :`playerOne = ${playerOne}\nComputer = ${computer}\nPlayerOne Wins!`;
            alert(result);
            let playAgain = confirm("Do you want to play again?");
            playAgain ? location.reload() : alert("Okay next timn");
        }else{
            alert("You didn't entered rock, paper, scissors!")
        }
    }else{
        alert("Next Time!")
    }
}else{
    alert("OK!,next time");
}