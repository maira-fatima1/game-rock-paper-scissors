#! /usr/bin/env node
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n\tWelcome to My Rock-Paper-Scissors-Gamme\n"));
const choices = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It is a tie!';
    }
    if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        return 'You Win!';
    }
    return 'You Lose!';
}
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    console.log(chalk.bgGrey(`YouChoose:${playerChoice}`, `ComputerChoose:${computerChoice}`));
    console.log(chalk.greenBright.bold(`result:${result}`));
}
playGame('Rock');
playGame('Paper');
playGame('Scissors');
