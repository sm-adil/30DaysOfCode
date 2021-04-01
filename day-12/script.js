const randomFactelement = document.querySelector('#random__fact')
const loadMoreButton = document.querySelector('#load__more')

const API_SOURCE = 'https://cat-fact.herokuapp.com'

const renderFact = async () => {
  randomFactelement.innerHTML = 'Loading...'
  const { text } = await fetch(`${API_SOURCE}/facts/random`).then(res =>
    res.json()
  )

  if (!text) return null
  randomFactelement.innerHTML = text
}

window.addEventListener('load', renderFact)
loadMoreButton.addEventListener('click', async () => {
  loadMoreButton.disabled = true
  loadMoreButton.innerHTML = 'Loading...'

  await renderFact()

  loadMoreButton.disabled = false
  loadMoreButton.innerHTML = 'Learn more'
})
