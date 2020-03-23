const body = document.querySelector('body')
const cardBody = document.querySelectorAll('.pricing__card')
const buttonBody = document.querySelectorAll('.pricing__button')
const toggleButton = document.querySelector('.toggler')

toggleButton.addEventListener('click', e => {
    e.preventDefault()
    body.classList.toggle('body__dark')
    cardBody.forEach(card => (
        card.classList.toggle('card__dark')
    ))
    buttonBody.forEach(button => (
        button.classList.toggle('body__dark')
    ))
    toggleButton.classList.toggle('toggle__dark')
})