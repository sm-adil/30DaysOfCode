const mainHeadingElements = document.querySelectorAll('main h2, h3')
const tocElement = document.querySelector('#toc__element')

const getNestedHeadings = headingElements => {
  const nestedHeadings = []

  headingElements.forEach(heading => {
    const { innerText: title, id } = heading

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title
      })
    }
  })

  return nestedHeadings
}

const createList = ({ id, title }) => {
  const tocList = document.createElement('li')
  const tocListLink = document.createElement('a')

  tocListLink.href = `#${id}` || '#'
  tocListLink.innerText = title || ''

  tocList.appendChild(tocListLink)

  return tocList
}

const renderTableOfContent = () => {
  const headingElements = Array.from(mainHeadingElements)

  const nestedHeadings = getNestedHeadings(headingElements)

  if (nestedHeadings.length <= 0) {
    tocElement.innerHTML = 'No data to show ⛔'
  }

  const mainList = document.createElement('ul')
  tocElement.appendChild(mainList)

  nestedHeadings.map(({ id, title, items }) => {
    const mainTOCList = createList({ id, title })

    if (items.length > 0) {
      const subList = document.createElement('ul')
      items.map(({ id, title }) => {
        const subTOCList = createList({ id, title })
        subList.appendChild(subTOCList)
      })
      mainTOCList.appendChild(subList)
    }

    mainList.appendChild(mainTOCList)
  })
}

renderTableOfContent()
