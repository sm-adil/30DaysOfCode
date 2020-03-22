const handContainer = document.querySelector('.hand__container')
const chosenContainer = document.querySelector('.chosen__container')
const handImg = document.querySelectorAll('.hand__container img')
const userPick = document.querySelector('.you__picked img')
const housePick = document.querySelector('.house__picked img')
const gameResultButton = document.querySelector('.game__result button')
const gameResult = document.querySelector('.game__result h1')
let totalScore = document.querySelector('.score__count')
let userChoice
let houseChoice

const handSign = [
    {
        name: 'rock',
        src: './images/icon-rock.svg'
    },{
        name: 'paper',
        src: './images/icon-paper.svg'
    },{
        name: 'scissors',
        src: './images/icon-scissors.svg'
    }
]

compareSign = (userChoice, houseChoice) => {
    if (userChoice === houseChoice) {
        return `It's a tie!`
    }
    if (userChoice === 'rock') {
        if (houseChoice === 'scissors') {
            totalScore.innerHTML = Number(totalScore.innerHTML) + 1
            return 'You Win!'
        } else {
            totalScore.innerHTML = Number(totalScore.innerHTML) - 1
            return 'You lose! Try again'
        }
    }
    if (userChoice === 'paper') {
        if (houseChoice === 'rock') {
            totalScore.innerHTML = Number(totalScore.innerHTML) + 1
            return 'Yoo Win!'
        } else {
            totalScore.innerHTML = Number(totalScore.innerHTML) - 1
            return 'You lose! Try again'
        }
    }
    if (userChoice === 'scissors') {
        if (houseChoice === 'paper') {
            totalScore.innerHTML = Number(totalScore.innerHTML) + 1
            return 'You Win!'
        } else {
            totalScore.innerHTML = Number(totalScore.innerHTML) - 1
            return 'You lose! Try again'
        }
    }
}

handImg.forEach(img => {
    img.addEventListener('click', e => {
        // User pick
        userChoice = e.target
        handContainer.style.display = 'none'

        // House pick
        houseChoice = handSign[Math.floor(Math.random() * handSign.length)].name

        houseChoice = handSign.find(sign => (sign.name === houseChoice))

        userPick.src = userChoice.src
        housePick.src = houseChoice.src

        // Compare userChoice vs houseChoice
        gameResult.innerHTML = compareSign (userChoice.alt, houseChoice.name)
        chosenContainer.style.display = 'block'
    })
})

gameResultButton.addEventListener('click', e => {
    chosenContainer.style.display = 'none'
    handContainer.style.display = 'block'
})