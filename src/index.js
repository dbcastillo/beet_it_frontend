document.addEventListener("DOMContentLoaded", () => {
  showWelcome()

  breakfast.addEventListener('click', (event) => {
    const removeDiv = document.getElementById('welcomePage')
    removeDiv.remove
    showCuisines()
  //   const beetWelcome = document.getElementById('welcome-page')
  //   beetWelcome.innerHTML = ``
  //   const breakfast = document.getElementById('breakfast')
  //   const lunch = document.getElementById('lunch')
  //   const dinner = document.getElementById('dinner')
  //   breakfast.innerText = 'a'
  //   lunch.innerText = 'a'
  //   dinner.innerText = 'a'
  //   showCuisines()
  })
  lunch.addEventListener('click', (event) => {
    const removeDiv = document.getElementById('welcomePage')
    removeDiv.remove
    showCuisines()
  //   const beetWelcome = document.getElementById('welcome-page')
  //   beetWelcome.innerHTML = ``
  //   const breakfast = document.getElementById('breakfast')
  //   const lunch = document.getElementById('lunch')
  //   const dinner = document.getElementById('dinner')
  //   breakfast.innerText = ''
  //   lunch.innerText = ''
  //   dinner.innerText = ''
  //   showCuisines()
  })
  dinner.addEventListener('click', (event) => {
    const removeDiv = document.getElementById('welcomePage')
    removeDiv.remove
    showCuisines()
  //   const beetWelcome = document.getElementById('welcome-page')
  //   beetWelcome.innerHTML = ``
  //   const breakfast = document.getElementById('breakfast')
  //   const lunch = document.getElementById('lunch')
  //   const dinner = document.getElementById('dinner')
  //   breakfast.innerText = ''
  //   lunch.innerText = ''
  //   dinner.innerText = ''
  //   showCuisines()
  })

})
