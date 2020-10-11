const accordionExpandButton = document.querySelectorAll('.accordion__expand__button')
const accordionDescription = document.querySelectorAll('.accordion__description')

accordionExpandButton.forEach((btn, key) => {
  btn.addEventListener('click', () => {
    accordionDescription[key].classList.toggle('hidden')
  })
})
