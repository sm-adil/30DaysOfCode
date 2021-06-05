const form = document.querySelector('form button')
const userName = document.querySelector('#userName')
const userContainer = document.querySelector('.user__container')
const repoContainer = document.querySelector('.repo__container')

form.addEventListener('click', async (e) => {
    e.preventDefault()
    if (userName.value) {
        let apiResponse = await fetch(`https://api.github.com/users/${userName.value}`).then(res => res.json())
        let apiRepoResponse = await fetch(`https://api.github.com/users/${userName.value}/repos`).then(res => res.json())
        repoContainer.innerHTML = ''

        // Check and retirn if API request limit exeeds
        if (apiResponse.hasOwnProperty('message') || apiRepoResponse.hasOwnProperty('message')) return

        userContainer.innerHTML = `<img src='${apiResponse.avatar_url}' alt='${apiResponse.name}' /><h2>${apiResponse.name}</h2><p>${apiResponse.bio ? apiResponse.bio : ''}</p><strong>${apiResponse.company ? apiResponse.company : ''}</strong`

        Object.keys(apiRepoResponse).forEach(key => {
            const project = document.createElement('div')
            project.setAttribute('class', 'project')
            project.innerHTML = `<h3>${apiRepoResponse[key].name}</h3><p>${apiRepoResponse[key].description ? apiRepoResponse[key].description : ''}</p>`
            repoContainer.appendChild(project)
        })
    }
})