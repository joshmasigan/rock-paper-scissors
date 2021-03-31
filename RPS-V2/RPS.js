// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');
const weapons = document.querySelectorAll('.weapon');

weapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
        const computer = generateComputerChoice();
        const player = weapon.textContent;
        let winner = false;
        let tie = true;
        while(tie)
        {
            if(player === computer)
            {
                console.log("You tied! Please select again");
                return
                // player = askPlayerChoice();
                // computer = generateComputerChoice();
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
        // console.log(weapon.textContent);
    })
}); // when button clicked, start game

function generateComputerChoice()
{
    // generate number from 0-2
    // use generated number to access selection from choices array
    // return R/P/S
    let choices = ["Rock", "Paper", "Scissors"]; 
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function playGame(e){
    const computer = generateComputerChoice();
    const player = e.textContent;
    let winner = false;
    let tie = true;
    while(tie)
    {
        if(player === computer)
        {
            console.log("You tied! Please select again");
            return
            // player = askPlayerChoice();
            // computer = generateComputerChoice();
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