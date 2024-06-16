// let randomNumber = parseInt(Math.random() * 100 + 1)

// const p = document.createElement('p')

// let prevGuess = []
// let numGuess = 0

// let playGame = true

// if (playGame) {
//     submit.addEventListener('click', e => {
//         e.preventDefault()
//         const guess = parseInt(userInput.value)
//         validateGuess(guess)
//     })
// }

// const validateGuess = (guess) => {
//     if (isNaN(guess)) {
//         alert('Please enter a valid number')
//     } else if (guess < 1) {
//         alert('Please enter a number more than 1')
//     } else if (guess > 100) {
//         alert('Please enter a number less than 100')
//     } else {
//         prevGuess.push(guess)
//         if (numGuess > 2) {
//             debugger
//             displayGuess(guess)
//             displayMessage(`Game Over. Random number was ${randomNumber}`)
//             endGame()
//         } else {
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }

// const checkGuess = (guess) => {
//     if (guess === randomNumber) {
//         displayMessage('You guessed it right')
//         endGame()
//     } else if (guess < randomNumber) {
//         displayMessage('Number is too low')
//     } else if (guess > randomNumber) {
//         displayMessage('Number is too high')
//     }
// }

// const displayGuess = (guess) => {
//     userInput.value = ''
//     guessSlot.innerText += ` ${guess}`
//     numGuess++
//     remainingChances.innerText = `${10 - numGuess}`
// }

// const displayMessage = (message) => {
//     hint.innerText = `${message}`
// }


// const endGame = () => {
//     userInput.value = ''
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button')
//     p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
//     startOver.appendChild(p)
//     playGame = false
//     newGame()
// }

// const newGame = () => {
//     const newGameButton = document.querySelector('#newGame')
//     newGameButton.addEventListener('click', e => {
//         randomNumber = parseInt(Math.random() * 100 + 1)
//         prevGuess = []
//         numGuess = 0
//         guessSlot.innerText = ''
//         remainingChances.innertext = 10
//         hint.innerText = ''
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p)
//         playGame = true
//     })
// }
const main = () => {
    //references
    const submit = document.querySelector('#subt')
    const userInput = document.querySelector('#guessField')
    const guessSlot = document.querySelector('.guesses')
    const guessRemainingRef = document.querySelector('.remaining')
    const hint = document.querySelector('.hint')
    const startOver = document.querySelector('.resultParas')

    const getRandomNumber = () => {
        return parseInt(Math.random() * 1000 + 1)
    }

    let randomNumber = getRandomNumber()
    console.log(randomNumber)
    let playGame = true
    let guessesRemaining = 10
    guessRemainingRef.innerText = guessesRemaining

    const handleInput = e => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        checkGuess(guess)
    }

    if (playGame) {
        submit.addEventListener('click', handleInput)
    }

    const displayMessage = (message)=>{
        hint.innerText = message
    }

    const checkGuess = (guess) => {
        guessRemainingRef.innerText = --guessesRemaining
        if (guess === randomNumber) {
            displayMessage('You guessed it right')
            endGame()
        } else if (guess < randomNumber) {
            displayMessage('Number is too low')
        } else if (guess > randomNumber) {
            displayMessage('Number is too high')
        }
    }

    const endGame = () => {
        playGame = false
        submit.removeEventListener('click', handleInput)
        submit.setAttribute('disabled', '')
        userInput.value = ''
        guessRemainingRef.innerText = ''
        const p = document.createElement('p')
        p.innerHTML = `<h1 id='newGame'>Start New Game</h1>`
        startOver.appendChild(p)
        newGame()
    }

    const newGame = () => {
        const newGameRef = document.getElementById('newGame')
        newGameRef.addEventListener('click', () => {
            playGame = true
            submit.removeAttribute('disabled')
            guessesRemaining = 10
            guessRemainingRef.innerText = guessesRemaining
            newGameRef.removeEventListener('click', newGame)
            newGameRef.remove()
        })
    }
}
main()
