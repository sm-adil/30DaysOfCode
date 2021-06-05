const loadMealButton = document.querySelector('.generator__container button')
const mealContainer = document.querySelector('.meal__container')

loadMealButton.addEventListener('click', e => (
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	})
))

createMeal = (meal) => {
    const ingredients = []
	for(let i=1; i<=25; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			break
		}
    }
    mealContainer.innerHTML = `
        <img src='${meal.strMealThumb}' alt='${meal.strMeal}' />
        <div>
            <h2>${meal.strMeal}</h2>
            ${meal.strTags ? `
                <ul class="tags__container">
                    ${meal.strTags.split(',').map(tag => `<li class="tag">${tag}</li>`).join(' ')}
                </ul>
            ` : ''}
            <p>${meal.strInstructions}</p>
            ${ingredients ? `
                <h3>Ingredients</h3>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `
}
