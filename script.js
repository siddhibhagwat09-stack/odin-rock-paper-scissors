//Gets computer choice randomly
function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    return computerChoice;
}

let humanScore = 0
let computerScore = 0

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

//Checks winner of the round and informs the player
function playRound(h)
{
    const c = getComputerChoice();
    h = h.toLowerCase();
    if(c == h)
    {
        console.log("Tie");
        result.textContent = "Tie";
    }

    else if(c === "rock" && h === "paper" || c === "paper" && h === "scissors" || c === "scissors" && h === "rock")
    {
        console.log(`You win! ${h} beats ${c}`);
        result.textContent = `You win! ${h} beats ${c}`;
        humanScore++;
    }

    else{
        console.log(`You lose! ${c} beats ${h}`);
        result.textContent = `You lose! ${c} beats ${h}`
        computerScore++;
    }
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if(humanScore === 5){
        result.textContent = "Congratulations! You won the game!";
        endGame();
    }

    else if(computerScore === 5){
        result.textContent = "You lost the game this time :(";
        endGame();
    }
}

//Disable buttons when game is over
function endGame()
{
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

//Logs final scores and winner of the game
// function getWinner()
// {
//     // Log final scores
//     console.log("Your final score is: " + humanScore);
//     console.log("Computer's final score is: " + computerScore);

//     // Log winner

//     // User wins
//     if (humanScore > computerScore)
//     {
//         console.log("Congratulations! You won the game");
//     }

//     // Computer wins
//     else if (computerScore > humanScore)
//     {
//         console.log("You lost the game this time :(");
//     }

//     // Tie
//     else
//     {
//         console.log("No winner! The game is a tie");
//     }
// }

// playGame();



rock.addEventListener("click", function(e){
    playRound("rock");    
});

paper.addEventListener("click", function(e){
    playRound("paper");    
});

scissors.addEventListener("click", function(e){
    playRound("scissors");    
});