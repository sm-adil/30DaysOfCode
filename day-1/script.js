const userInput = document.querySelector('#container__input')
const computedResult = document.getElementById('container__result')

userInput.addEventListener("keyup", function(e) {
    if (e.keyCode !== 48 && e.keyCode !== 49 && e.keyCode !== 13 && e.keyCode !== 8) {
        alert('Only 0 and 1 is allowed');
    }
    computedResult.innerText = parseInt(userInput.value, 2)
})