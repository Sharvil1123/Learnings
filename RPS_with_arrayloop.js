// Rock, Paper and Scissors : Refactored with while loop and and array.
let playGame  = confirm("Do want to Play Rock, Paper and Scissors?");
if(playGame){
    // playGame
    while(playGame){
        const playerChoice = prompt("please enter rock, paper or scissor");
        if (playerChoice || playerChoice === ""){
            const playerOne = playerChoice.trim().toLowerCase();
            if(
                playerOne === "rock" ||
                playerOne === "paper" ||
                playGame === "scissors"
            ){
                const computerChoice = Math.floor(Math.random() *3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result = playerOne === computer
                ? "tie game"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne : ${playerOne}\nComputer : ${computer}\nComputer Wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne : ${playerOne}\nComputer : ${computer}\nComputer Wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne : ${playerOne}\nComputer : ${computer}\nComputer Wins!`
                : `playerOne : ${playerOne}\nComputer : ${computer}\nplayerOne Wins!`;

                alert(result);
                playGame = confirm("Playagain?");
                if(!playGame){
                    alert("Ok thanks for playing");
                    continue;
                }else{
                    alert("You didn't enter rock, paper, scissors");
                };

            }
        }else{
            alert("I guess you changed your mind!");
        };
    }
}else{
    alert("Ok maybe next time");
};