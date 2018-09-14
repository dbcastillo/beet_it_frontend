function renderCuisineDropDown(cuisine){
  let optionEl = document.createElement('option');
  optionEl.value = cuisine.id;
  optionEl.innerHTML = cuisine.name;
  return optionEl
}

function renderForm() {
  let formDiv = document.querySelector('#form-div')
  formDiv.innerHTML =
  `
  <h1>Create Meal</h1>
  <br>
  <form id="form-food">
    <div>
      <label for="image">Image:</label>
      <input type="text" name="image">
    </div>
    <br>
    <div>
      <label for="title">Title:</label>
      <input type="text" name="title">
    </div>
    <br>
    <div>
      <label for="instructions">Instructions:(separate each with semicolon)</label>
      <input type="text" name="instructions">
    </div>
    <br>
    <div>
      <label for="ingredients">Ingredients:(separate each with semicolon)</label>
      <input type="text" name="ingredients">
    </div>
    <br>
    <div>
      <h3>Please select a meal-time</h3>
      <fieldset>
        <select id = "chosenMealtime">
          <option value = "1">Breakfast</option>
          <option value = "2">Lunch</option>
          <option value = "3">Dinner</option>
        </select>
      </fieldset>
    </div>

    <div>
      <h3>Please select a Cuisine</h3>
      <fieldset>
        <select id = "chooseCuisine">
        </select>
      </fieldset>
    </div>
    <div class="button">
      <button id="submit">Submit</button>
    </div>
    </form>`

    const cuisineInput = document.querySelector('#chooseCuisine');

    fetch('http://localhost:3000/api/v1/cuisines')
      .then(res => res.json())
      .then(cuisines => {
        cuisines.forEach((cuisine) => {
          cuisineInput.append(renderCuisineDropDown(cuisine))
        })
      })


    let submitForm = document.querySelector('#form-food')

    submitForm.addEventListener('submit',(event) => {
      event.preventDefault()
      let imageInput = document.querySelector('input[name="image"]')
      let titleInput = document.querySelector('input[name="title"]')
      let instrInput = document.querySelector('input[name="instructions"]')
      let ingreInput = document.querySelector('input[name="ingredients"]')
      let mealInput = document.getElementById('chosenMealtime').value

      const recipes = 'http://localhost:3000/api/v1/recipes'

      fetch(recipes, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          image: imageInput.value,
          title: titleInput.value,
          instructions: instrInput.value,
          ingredients: ingreInput.value,
          cuisine_id: cuisineInput.value,
          mealtime_id: mealInput
        })
      })
      .then(res => res.json())
      .then(card => {
        formDiv.remove()
        temp = document.querySelector("#temp-div");
        //temp.append(rendertheCard(card))
      })
    })
}
//cuisineInput
//cuisine_id:
