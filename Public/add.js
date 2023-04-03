function addRecipeName() {
    const recipeNameEl = document.querySelector('#recipeName');
    const recipeName = document.getElementById('name-input').value;
    recipeNameEl.innerHTML = `<h2>${recipeName}</h2>`;
}

function addDescription() {
    const descriptionEl = document.querySelector('#recipe-description');
    const description = document.getElementById('description-input').value;
    descriptionEl.innerHTML = `<p>${description}</p>`;
}

function addIngredients() {
    const ingredientsEl = document.querySelector('#ingredientsCard');
    const ingredients = document.getElementById('ingredients-input').value;
    const ingredientsArr = ingredients.split(/\r?\n/);
    ingredientsEl.innerHTML = `<ul list-style-type="none" id="ingredients"></ul>`;

    for (const i of ingredientsArr) {
        const ingredientsUl = document.getElementById('ingredients');
        const newIngredient = document.createElement('li');
        newIngredient.textContent = i;
        
        ingredientsUl.appendChild(newIngredient);
    }
}

function addDirections() {
    const directionsEl = document.querySelector('#directionsCard');
    const directions = document.getElementById('directions-input').value;
    const directionsArr = directions.split(/\r?\n/);
    directionsEl.innerHTML = `<ol id="directions"></ol>`;

    for (const i of directionsArr) {
        const directionsOl = document.getElementById('directions');
        const newStep = document.createElement('li');
        newStep.textContent = i;

        directionsOl.appendChild(newStep)
    }
}

function insertCard() {
    const recipeName = document.getElementById('name-input').value;
    const description = document.getElementById('description-input').value;
    const newChild = document.createElement('div');
    newChild.innerHTML = `<pre><div class="card">
    <a class="card-block stretched-link text-decoration-none text-dark" href="add.html">
        <img src="add.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${recipeName}</h5>
        <p class="card-text">${description}</p>
        </div>
    </a>
    </div>
    </pre>`;
  
    const parentElement = document.querySelector("recipe-card-container");
    parentElement.appendChild(newChild);
  }
  
// This function will be created and implemented after we cover the necessary skills in class.
// For now it changes the add recipe page itself, but doesn't add a recipe to the person's account.
function addRecipe() {
    addRecipeName();
    addDescription();
    addIngredients();
    addDirections();
    insertCard();
}