function showCuisines(num) {

  const cuisineList = document.querySelector('#cuisines-list')
  cuisineList.innerHTML = `<h1>Choose Cuisine</h1>`

  cuisineDiv = document.getElementById('cuisine-div')
  cuisineDiv.appendChild(cuisineList)

  function renderCuisines(cuisine) {
    const cuisineName = `
    <li id='cuisine-li'>
    <button class="cuisineButton">${cuisine}</button>
    </li>
    <br>
    `
    cuisineList.innerHTML += cuisineName
    return cuisine
  }

  const endPoint = `http://localhost:3000/api/v1/meals/${num}`
  fetch(endPoint)
    .then(res => res.json())
    .then(meals => {
      mealObject = meals['recipe_cards']
      const mealCuisines = Object.keys(mealObject)
      mealCuisines.forEach((cuisine) => {
        renderCuisines(cuisine)

      })
    })

    cuisineDiv.addEventListener('click', (event) => {
      if (event.target.classList.contains('cuisineButton')) {
        const cuisineType = event.target.innerText
        const recipecardArray = mealObject[cuisineType]

        cuisineDiv.remove()

        let recipeList = document.getElementById('recipes-list')
        recipeList.innerHTML = `
        <h1>Choose Recipe</h1>
        `

        recipecardArray.forEach((recipeCard) => {
          recipeList.append(showRecipe(recipeCard))
        })
      }
    })

}
