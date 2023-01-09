function getComputerChoice() {
    // Create array with the three options.
    const choices = ["Rock", "Paper", "Scissors"];

    // Randomly select the index of one of the choices.
    let choice = Math.floor(Math.random() * choices.length);

    // Return the randomly selected choice.
    return choices[choice];
}
