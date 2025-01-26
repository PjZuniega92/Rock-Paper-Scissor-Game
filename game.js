const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))  // this is the user choice

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or use possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    else {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.textContent = computerChoice
    result() 
}   // this is the computer choice

function result() {
    console.log(resultDisplay)
    if (userChoice.toLowerCase() === computerChoice.toLowerCase()) {
        resultDisplay.textContent = 'It is a tie!'
    }
    else if (
        (userChoice.toLowerCase() === 'Rock' && computerChoice.toLowerCase() === 'Paper') ||
        (userChoice.toLowerCase() === 'Paper' && computerChoice.toLowerCase() === 'Scissors') ||
        (userChoice.toLowerCase() === 'Scissors' && computerChoice.toLowerCase() === 'Paper') ||
        (userChoice.toLowerCase() === 'Scissors' && computerChoice.toLowerCase() === 'Rock') )
        {
            resultDisplay.textContent = 'Computer Wins!'
        }
        else {
            resultDisplay.textContent ='You Win!'
        }
}
 