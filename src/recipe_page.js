function showRecipe(recipe) {
  let recipeList = document.getElementById('recipes-list')
  recipeList.innerHTML = `
  <h1>Choose Recipe</h1>
  `

  let recipeName = `
  <li id='cuisine-li'>
    <h4 class='recipeHeader'>${recipe.name}</h4>
  </li>
  `
  recipeList.innerHTML += recipeName

  return recipe
}
