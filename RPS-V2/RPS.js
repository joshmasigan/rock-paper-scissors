const weapons = document.querySelectorAll('.weapon');
const arena = document.querySelector('.arena');
const userScore = document.querySelector('#user-score');
const cpuScore = document.querySelector('#cpu-score');

weapons.forEach(weapon => weapon.addEventListener('click', playGame));

function playGame(e){
    const computer = generateComputerChoice();
    const player = e.path[0].textContent;
    let winner = false;
    let tie = true;
    if(player === computer)
    {
        console.log("You tied! Please select again");
        return
    }
    else if(player === "Rock")
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
    if(winner)
    {
        userScore.textContent = parseInt(userScore.textContent) + 1;
    }
    else
    {
        cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
    }
    return winner;
}

function generateComputerChoice()
{
    // generate number from 0-2
    // use generated number to access selection from choices array
    // return R/P/S
    let choices = ["Rock", "Paper", "Scissors"]; 
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}