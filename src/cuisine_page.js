function showCuisines(num) {

  const cuisineList = document.querySelector('#cuisines-list')
  cuisineList.innerHTML = `<h1>Choose Cuisine</h1>`

  const endPoint = `http://localhost:3000/api/v1/meals/${num}`
  fetch(endPoint)
    .then(res => res.json())
    .then(meals => {
      const cuisineArray = meals['cuisines']
      cuisineArray.forEach(cuisine => {
        renderCuisines(cuisine)
      })

    })

  function renderCuisines(cuisine) {
    const cuisineName = `
    <li id='cuisine-li'>
      <h4 class='cuisineHeader'>${cuisine.name}</h4>
    </li>
    `
    cuisineList.innerHTML += cuisineName
    return cuisine
  }

  const cuisineDiv = document.getElementById('cuisine-div')
  cuisineDiv.appendChild(cuisineList)

  cuisineDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('cuisineHeader')) {
      fetch('http://localhost:3000/api/v1/recipes')
      .then(res => console.log(res))
    }
  })

}
