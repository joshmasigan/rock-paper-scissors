function generateComputerChoice()
{
    // generate number from 0-2
    // use generated number to access selection from choices array
    // return R/P/S
    let choices = ["Rock", "Paper", "Scissors"]; 
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}
function askPlayerChoice()
{
    // prompt user for R/P/S
    // reject string if input is not rock, paper, or scissors
    // if selection = rock return = "Rock"
    // if selection = paper return = "Paper"
    // if selection = scissors return "Scissors"
    while(true)
    {
        let userChoice = prompt("Please enter Rock, Paper, or Scissors", "Rock, Paper, Scissors");
        if (userChoice.toUpperCase() === "ROCK")
        {
            return "Rock"
        }
        else if (userChoice.toUpperCase() === "PAPER")
        {
            return "Paper";
        }
        else if (userChoice.toUpperCase() === "SCISSORS")
        {
            return "Scissors";
        }
        else
        {
            console.log("Please enter only rock, paper, or scissors");
        }
    }
}

function playGame()
{
    let player = askPlayerChoice();
    let computer = generateComputerChoice();
    let winner = false;
    let tie = true;
    while(tie)
    {
        // code here to determine winner
        if(player === "Rock")
        {
            if(computer === "Paper")
            {
                tie = false;
            }
            if(computer === "Scissors")
            {
                tie = false;
                winner = true;
            }
        }
        else if(player === "Paper")
        {
            if(computer === "Scissors")
            {
                tie = false;
            }
            if(computer === "Rock")
            {
                tie = false;
                winner = true;
            }

        }
        else if(player === "Scissors")
        {
            if(computer === "Rock")
            {
                tie = false;
            }
            if(computer === "Paper")
            {
                tie = false;
                winner = true;
            }
        }
        else
        {
            console.log("You tied! Please select again");
            let player = askPlayerChoice();
            let computer = generateComputerChoice();
        }
    }
    if(winner)
    {
    console.log("You won! " + player + " beats " + computer);
    }
    else
    {
        console.log("You lost! " + computer + " beats " + player);
    }
    return winner;
}

function playMatch()
{
    // playGame();
    let wins = 0;
    for(let i = 0; i < 5; ++i)
    {
        let winner = playGame();
        if(winner)
        {
            ++wins;
        }
    }
    (wins > 2) ? console.log("Congratulations! You won " + wins + " games out of 5!"):
                 console.log("You lost! The computer won " + (5 - wins) + " games out of 5!");
    // play a 5 game match
    // determine winner after 5 games
}