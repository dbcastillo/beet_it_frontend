function showCuisines() {

  const cuisineList = document.querySelector('#cuisines-list')
  cuisineList.innerHTML = `<h1>Choose Cuisine</h1>`

  const endPoint = 'http://localhost:3000/api/v1/cuisines'
  fetch(endPoint)
    .then(res => res.json())
    .then(cuisines => {
      cuisines.forEach(cuisine => {
        renderCuisines(cuisine)
      })
    })


  const cuisineForm = document.getElementById('cuisine-form')
  const cuisineInput = document.getElementById('cuisine-input')

  cuisineForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(endPoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: cuisineInput.value
      })
    })
    .then(res => res.json())
    .then(cuisine => renderCuisines(cuisine))
    cuisineInput.value = ""
  })



  function renderCuisines(cuisine) {
    const cuisineName = `
    <li>
      <h4>${cuisine.name}</h4>
    </li>
    `
    cuisineList.innerHTML += cuisineName
    return cuisine
  }

  cuisineForm.innerHTML = `
  <input id="cuisine-input" type="text" name="cuisine" placeholder="Add Cuisine"/>
  <input type="submit" value="Submit"/>
  `
}
