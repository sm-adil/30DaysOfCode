// set api end point
const API = 'https://programming-quotes-api.herokuapp.com/quotes/random';

// set document selectors
const mainContainer = document.querySelector('.container');
const loadQuote = document.querySelector('#load-quote');

// set event listener to generate new quotes
loadQuote.addEventListener('click', async () => {
    mainContainer.innerHTML = '<h3>Loading...</h3>';
    try {
        const req = await fetch(API).then(res => res.json());

        mainContainer.innerHTML = `
            <h3>${req.en}</h3>
            <p>-- ${req.author}</p>
        `;
    } catch (err) {
        alert(err);
    }
});
