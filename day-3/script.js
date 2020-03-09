const dataList = document.querySelectorAll('#input li')
const operationType = document.querySelectorAll('#operation li')
const enteredData = document.querySelector('#entered__data')
const calculatedResult = document.querySelector('#calculated__result')

dataList.forEach(function (click) {
    click.addEventListener('click', function() {
        if (this.innerText === '=' && enteredData.innerText !== '') {
            calculatedResult.innerText = eval(enteredData.innerText)
        }
        else if (this.innerText !== '=') {
            enteredData.innerText += this.innerText
        }
    })
})

operationType.forEach(function (click) {
    click.addEventListener('click', function() {
        if (this.innerText === 'DEL') {
            enteredData.innerText = ''
            calculatedResult.innerText = ''
        }
        else if (enteredData.innerText !== '') {
            enteredData.innerText += this.innerText
        }
    })
})
