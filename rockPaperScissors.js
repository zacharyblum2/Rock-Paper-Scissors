function getComputerChoice() {
    // Create array with the three options.
    const choices = ["Rock", "Paper", "Scissors"];

    // Randomly select the index of one of the choices.
    let choice = Math.floor(Math.random() * choices.length);

    // Return the randomly selected choice.
    return choices[choice];
}

function play(e) {
    // e.target lists the element <button> text </button>
    // (e.target).innerHtml will bring out the text inside the button.
    let p = (e.target).innerHTML
    let c = getComputerChoice();

    // Save the div we want to output results to.
    const result = document.querySelector('.result');

    // Create logic of who wins. 
    // First Case: Same selection
    if (p == c) {
        pScore++;
        cScore++;

        if (pScore == 5)
            result.innerHTML = `You've won the game ${pScore} to ${cScore}`;
        else if (cScore == 5) 
            result.innerHTML = `You've lost the game ${cScore} to ${pScore}`;
        else
            // Change the innerHTML of our result div to the result of the game.
            result.innerHTML = `You Tie! You both picked ${p}!`;
        
    }
        
    // Second Case: Not a tie and player chose rock.
    else if (p == "Rock") {
        if (c == "Paper")
            result.innerHTML = `You Lose! ${c} beats ${p}`;
        else 
            result.innerHTML = `You Win! ${p} beats ${c}`;
    }
    // Third Case: Not a tie and player chose paper. 
    else if (p == "Paper") {
        if (c == "Scissors")
            result.innerHTML = `You Lose! ${c} beats ${p}`;
        else 
            result.innerHTML = `You Win! ${p} beats ${c}`;
    }
    // Final Case: Not a tie and player chose scissors.
    else {
        if (c == "Rock")
            result.innerHTML = `You Lose! ${c} beats ${p}`;
        else 
            result.innerHTML = `You Win! ${p} beats ${c}`;
    }        
}

function game() {
    // Run a 5 round game of rock paper scissors. 
    // for (let i = 0; i < 5; i++)
    // {
        // Get the user selection.
        // NOTE: This doesn't check whether some form of rock, paper or scissors is actually entered.
        let playerSelection = prompt("Please choose between rock, paper and scissors: ");

        // Get the computer selection. 
        let computerSelection = getComputerChoice();

        play(playerSelection, computerSelection);
    // }
}

let pScore = 0;
let cScore = 0;

// Get a list of all the buttons.
const btns = document.querySelectorAll('button');

// Add an event listener to each button.
// When each button is clicked, call the function play. 
btns.forEach(btn => btn.addEventListener('click', play));