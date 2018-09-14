function showWelcome() {
  const welcomeDiv = document.createElement('div')
  welcomeDiv.id = 'welcomePage'
  welcomeDiv.innerHTML =
  `
  <h1>Which meal are you about to have...</h1>
  <br>
  <button Id="breakfast" name="button">Breakfast</button>
  <button Id="lunch" name="button">Lunch</button>
  <button Id="dinner" name="button">Dinner</button>
  `
  document.body.appendChild(welcomeDiv)
  const breakfast = document.getElementById('breakfast')
  const lunch = document.getElementById('lunch')
  const dinner = document.getElementById('dinner')

  breakfast.addEventListener('click', (event) => {
    const removeDiv = document.getElementById('welcomePage')
    removeDiv.remove()
    showCuisines(1)
  })
  lunch.addEventListener('click', (event) => {
    const removeDiv = document.getElementById('welcomePage')
    removeDiv.remove()
    showCuisines(2)
  })
  dinner.addEventListener('click', (event) => {
    const removeDiv = document.getElementById('welcomePage')
    removeDiv.remove()
    showCuisines(3)
  })


}
