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
//Checks winner of the round and informs the player
function playRound(c, h)
{
    h = h.toLowerCase();
    if(c == h)
    {
        console.log("Tie");
    }

    else if(c === "rock" && h === "paper" || c === "paper" && h === "scissors" || c === "scissors" && h === "rock")
    {
        console.log(`You win! ${h} beats ${c}`);
        humanScore++;
    }

    else{
        console.log(`You lose! ${c} beats ${h}`);
        computerScore++;
    }
}

//Logs final scores and winner of the game
function getWinner()
{
    // Log final scores
    console.log("Your final score is: " + humanScore);
    console.log("Computer's final score is: " + computerScore);

    // Log winner

    // User wins
    if (humanScore > computerScore)
    {
        console.log("Congratulations! You won the game");
    }

    // Computer wins
    else if (computerScore > humanScore)
    {
        console.log("You lost the game this time :(");
    }

    // Tie
    else
    {
        console.log("No winner! The game is a tie");
    }
}

//Starts the game and 5 rounds played
function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        const computerValue = getComputerChoice();
        const humanValue = prompt("Enter your choice");

        playRound(computerValue, humanValue);
    }
    getWinner();
}

playGame();