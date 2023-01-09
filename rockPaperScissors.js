function getComputerChoice() {
    // Create array with the three options.
    const choices = ["Rock", "Paper", "Scissors"];

    // Randomly select the index of one of the choices.
    let choice = Math.floor(Math.random() * choices.length);

    // Return the randomly selected choice.
    return choices[choice];
}

function play(playerSelection, computerSelection) {
    // Convert the strings to all lowercase to allow case sensitivty. 
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();

    // Create logic of who wins. 
    // First Case: Same selection
    if (p == c)
        console.log(`You Tie! You both picked ${p}!`);
    // Second Case: Not a tie and player chose rock.
    else if (p == "rock") {
        if (c == "paper")
            console.log(`You Lose! ${c} beats ${p}`);
        else 
            console.log(`You Win! ${p} beats ${c}`);
    }
    // Third Case: Not a tie and player chose paper. 
    else if (p == "paper") {
        if (c == "scissors")
            console.log(`You Lose! ${c} beats ${p}`);
        else 
            console.log(`You Win! ${p} beats ${c}`);
    }
    // Final Case: Not a tie and player chose scissors.
    else {
        if (c == "rock")
            console.log(`You Lose! ${c} beats ${p}`);
        else 
            console.log(`You Win! ${p} beats ${c}`);
    }        
}

function game() {
    // Run a 5 round game of rock paper scissors. 
    for (let i = 0; i < 5; i++)
    {
        // Get the user selection.
        // NOTE: This doesn't check whether some form of rock, paper or scissors is actually entered.
        let playerSelection = prompt("Please choose between rock, paper and scissors: ");

        // Get the computer selection. 
        let computerSelection = getComputerChoice();

        play(playerSelection, computerSelection);
    }
}

game();