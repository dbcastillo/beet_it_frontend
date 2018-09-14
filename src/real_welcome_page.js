function realWelcome() {
  const welcomeDiv = document.createElement('div')
  welcomeDiv.id = 'welcomePage'
  welcomeDiv.innerHTML = `
  <h1>WELCOME TO BEET IT!</h1>
  <br>
  <h3>No money, No problem!</h3>
  <h3>We've got you covered!</h3>
  <h3>Start by choosing which meal you're about to have...</h3>
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
