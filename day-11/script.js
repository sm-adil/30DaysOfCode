const paginationContainer = document.querySelector('.pagination')
const currentPageContainer = document.querySelector('.current__page')

let currentPage = 1
const pageSize = 25
const totalNumberOfPages = 210

const pageNumbers = []
const totalPages = Math.ceil(totalNumberOfPages / pageSize)

for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i)
}

const createBtn = () => document.createElement('button')

const previousButton = createBtn()
const nextButton = createBtn()

const paginate = page => {
  if (page === 'previous' && currentPage !== 1) {
    currentPage = currentPage - 1
  }

  if (page === 'next' && currentPage !== totalPages) {
    currentPage = currentPage + 1
  }

  if (page !== 'previous' && page !== 'next') {
    currentPage = page
  }

  currentPageContainer.innerHTML = currentPage
  previousButton.disabled = currentPage === 1
  nextButton.disabled = currentPage === totalPages
}

previousButton.innerHTML = '👈'
previousButton.disabled = currentPage === 1
paginationContainer.appendChild(previousButton)
previousButton.addEventListener('click', () => paginate('previous'))

pageNumbers.forEach(page => {
  const pageButton = createBtn()
  pageButton.innerHTML = page
  paginationContainer.appendChild(pageButton)
  pageButton.addEventListener('click', () => paginate(page))
})

nextButton.innerHTML = '👉'
paginationContainer.appendChild(nextButton)
nextButton.disabled = currentPage === totalPages
nextButton.addEventListener('click', () => paginate('next'))
