function realWelcome() {
  let realwelcomeDiv = document.createElement('div')
  realwelcomeDiv.id = 'realwelcomePage'
  realwelcomeDiv.innerHTML =
  `<h1>WELCOME TO BEET IT!</h1>
  <br>
  <h3>No money, No problem!</h3>
  <br>
  <h3>We've got you covered!</h3>
  <br>
  <h3>Start by choosing a meal-time, or create a new meal...</h3>
  <br>
  <button Id="create-meal" name="button">Create Meal</button>
  <button Id="find-meal" name="button">Find Meal</button>`

  document.body.appendChild(realwelcomeDiv)

  const createMeal = document.getElementById('create-meal')
  const findMeal = document.getElementById('find-meal')

  createMeal.addEventListener('click', (event) => {
    realwelcomeDiv.remove()
    renderForm()

  })
  findMeal.addEventListener('click', (event) => {
    realwelcomeDiv.remove()
    showWelcome()
  })


}
