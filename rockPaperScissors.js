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

    let pChoice = document.querySelector('.playerChoice');
    let cChoice = document.querySelector('.computerChoice');

    pChoice.innerHTML = p;
    cChoice.innerHTML = c;

    let numP = document.querySelector('.numP');
    let numC = document.querySelector('.numC');

    let win = document.querySelector('.win');

    win.innerText = '';

    // Save the div we want to output results to.
    const result = document.querySelector('.result');

    // Create logic of who wins. 
    // First Case: Same selection
    if (p == c) {
        pScore += 1;
        cScore += 1;       
    }
    // Second Case: Not a tie and player chose rock.
    else if (p == "Rock") {
        if (c == "Paper") 
            cScore += 1;
        else 
            pScore += 1;
    }
    // Third Case: Not a tie and player chose paper. 
    else if (p == "Paper") {
        if (c == "Scissors")
            cScore += 1;
        else 
            pScore += 1;
    }
    // Final Case: Not a tie and player chose scissors.
    else {
        if (c == "Rock")
            cScore += 1;
        else 
            pScore += 1;
    }

    numP.innerText = pScore;
    numC.innerText = cScore;
    
    // Display the winner.
    if (pScore == 5 && cScore == 5) {
        // Display Tie!
        win.innerText = "You tied!";
        pScore = 0; 
        cScore = 0;
    }
    else if (cScore == 5) {
        // display you lose!
        win.innerText = "You lose!";
        pScore = 0; 
        cScore = 0;
    }    
    else if (pScore == 5) {
        // display you win!
        win.innerText = "You win!";
        pScore = 0; 
        cScore = 0;
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