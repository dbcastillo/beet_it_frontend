function rendertheCard(card) {
  recipeList.remove()

  const recipeSquare = document.createElement('div')
  recipeSquare.id = 'recipeSquare'

  // let rsH1 = document.createElement('h1')
  // rsH1.innerText = card.title
  // let rsImg = document.createElement('img')
  // rsImg.src = card.image
  // let rsH2 = document.createElement('h2')
  // rsH2.innerText = 'Instructions:'
  // let rsUl = document.createElement('ul')
  // rsUl.classList.add('inStruct')
  // let rsLi = document.createElement('li')
  // card.instructions.forEach((inst) => {
  //   rsLi.innerText = inst
  // })
  // rsUL.appendChild(rsLi)
  // let rsH22 = document.createElement('h2')
  // rsH22.innerText = 'Ingredients:'
  // let rsH33 = document.createElement('h3')
  // rsH33.innerText = card.ingredients

  // recipeSquare.append(rsH1, rsImg, rsH2, rsUl, rsLi, rsH22, rsH33)

  recipeSquare.innerHTML = `
  <h1>${card.title}</h1>
  <img src="${card.image}">
  <h2>Ingredients:</h2>
  <ul class='ingrd-ol'></ul>
  <h2>Instructions:</h2>
  <ol class='instr-ol'></ol>
  `
  instOl = recipeSquare.children[5]
  ingrOl = recipeSquare.children[3]
  inst = card.instructions
  ingr = card.ingredients
  instArray = JSON.parse(inst)
  ingrArray = JSON.parse(ingr)
  ingrArray.forEach((ingredient) => {
    ingrLi = document.createElement('li')
    ingrLi.innerText = ingredient
    ingrOl.append(ingrLi)
  })
  instArray.forEach((instruction) => {
    instLi = document.createElement('li')
    instLi.innerText = instruction
    instOl.append(instLi)
  })

  // new_inst = inst.split(",")
  // console.log(inst)
  // console.log(new_inst[0])
  // console.log(typeof inst)
  // let instLength = inst.length
  // let rsUL = document.getElementsByClassName('rsUL')
  // for (let i = 0; i<instLength; i++) {
  //   console.log(inst[i])
  // }


  document.body.appendChild(recipeSquare)
}

// <h3>${card.instructions}</h3>
