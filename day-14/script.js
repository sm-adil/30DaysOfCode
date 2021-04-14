const tooltipElement = document.querySelector('[data-tooltip]')

const renderTooltip = () => {
  const tooltip = document.querySelector('span[class="tooltip"]')
  if (tooltip) return tooltip.remove()

  const tooltipSpan = document.createElement('span')
  tooltipSpan.className = 'tooltip'
  tooltipSpan.textContent = tooltipElement.getAttribute('data-tooltip')

  tooltipElement.parentNode.appendChild(tooltipSpan)
}

tooltipElement.addEventListener('mouseover', renderTooltip)
tooltipElement.addEventListener('mouseleave', renderTooltip)
