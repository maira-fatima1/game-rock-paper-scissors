#! /usr/bin/env node
import  inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n\tWelcome to My Rock-Paper-Scissors-Gamme\n"));


type Choice = 'Rock' | 'Paper' | 'Scissors';

const choices : Choice[] = ['Rock' , 'Paper' , 'Scissors' ];

function getComputerChoice() : Choice {
 const randomIndex = Math.floor(Math.random()* choices.length);
 return choices[randomIndex];
}

function determineWinner(playerChoice:Choice, computerChoice:Choice): string {
if (playerChoice === computerChoice){
   return 'It is a tie!';
}

if(
  (playerChoice ===  'Rock' &&  computerChoice === 'Scissors') ||
  (playerChoice === 'Paper' && computerChoice === 'Rock') ||
  (playerChoice === 'Scissors' && computerChoice === 'Paper') 
){

    return 'You Win!';
}

   return'You Lose!';
}

function playGame(playerChoice:Choice): void{
    const  computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice,computerChoice);

console.log(chalk.bgGrey(`YouChoose:${playerChoice}` , `ComputerChoose:${computerChoice}`));   
    console.log(chalk.greenBright.bold(`result:${result}`));   
}
playGame('Rock');
playGame('Paper');
playGame('Scissors');