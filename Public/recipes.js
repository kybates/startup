async function loadRecipes() {
    let recipes = [];
    try {
      // Get the user's recipes from the service
      const response = await fetch(`/api/recipes`);
      recipes = await response.json();
      // Save the recipes in case we go offline in the future
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } catch {
      // If there was an error then just use the last saved recipes
      console.log('There was a problem loading your recipes.')
      const recipesText = localStorage.getItem('recipes');
      if (recipesText) {
        recipes = JSON.parse(recipesText);
      }
    }

    showRecipes(recipes);
  }
  

  function showRecipes(recipes) {
    for (const recipe of recipes.entries()) {
      if (recipe[1].user === localStorage.getItem('userName')) {
        getRandomPicture(recipe);
      }
    }  
  }
  
  async function getRandomPicture(recipe) {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        displayRecipe(recipe, data);
      })
  }

  function displayRecipe(recipe, data) {
    const recipesEl = document.querySelector('#recipes');
  
    const recipeName = recipe[1].name;
    const description = recipe[1].description;
    const recipeId = recipe[1]._id
    const imgUrl = `https://picsum.photos/id/${data[0].id}/300`;
    const newChild = document.createElement('div');
    newChild.className = "card recipe-card"
    newChild.innerHTML = 
    `<a class="card-block stretched-link text-decoration-none text-dark" onclick="findRecipe('${recipeId}')">
        <img src=${imgUrl} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title recipe-title">${recipeName}</h5>
        <p class="card-text">${description}</p>
        </div>
    </a>`;
  
    recipesEl.appendChild(newChild);
  }

  loadRecipes();


  async function findRecipe(id) {
    let recipes = [];
    try {
      // Get the user's recipes from the service
      const response = await fetch(`/api/recipes`);
      recipes = await response.json();
      // Save the recipes in case we go offline in the future
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } catch {
      // If there was an error then just use the last saved recipes
      console.log('There was a problem loading your recipes.')
      const recipesText = localStorage.getItem('recipes');
      if (recipesText) {
        recipes = JSON.parse(recipesText);
      }
    }

    showRecipe(recipes, id);
  };

  function showRecipe(recipes, id) {
    for (const recipe of recipes.entries()) {
      if (recipe[1]._id === id) {
        showDetails(recipe); 
      }
    }
  };

  function showDetails(recipe) {
    const recipeName = recipe[1].name;
    const description = recipe[1].description;
    const ingredients = recipe[1].ingredients;
    const directions = recipe[1].directions;

    const mainEl = document.querySelector('#main')
    mainEl.innerHTML = `<div class="container-fluid recipe-name-container">
    <div class="card">
        <div class="card-header add-header" id="recipeName">
            <form method="get">
                <input type="text" class="form-control" id="name-input" placeholder="Recipe name"/>
            </form>
        </div>
        <div class="card-body" id="recipe-description">
          <input type="text" class="form-control" id="description-input" placeholder="Write a brief description of your recipe here."/>
        </div>
    </div>
    <div class="card-container">


        <div class="card">
            <div class="card-header"><h3>Ingredients</h3></div>
            <div class="card-body" id="ingredientsCard">
                <form method="get">
                    <textarea class="form-control" id="ingredients-input" 
                    placeholder="Add ingredients here.&#10;Place each ingredient on a separate line."></textarea>
                </form>
            </div>
        </div>


        <div class="card">
            <div class="card-header"><h3>Directions</h3></div>
            <div class="card-body" id="directionsCard">
                <form method="get">
                    <textarea class="form-control" id="directions-input"
                    placeholder="Add steps here.&#10;Place each step on a separate line.&#10;Do not include the number of each step."></textarea>
                </form>
            </div>
        </div>
    </div>
    <div id="button-container">
        <button class="btn btn-secondary" id="add-button" onclick="editRecipe()">Edit recipe</button>
    </div>
</div>`;

  addRecipeName(recipeName);
  addDescription(description);
  addIngredients(ingredients);
  addDirections(directions);
}

function addRecipeName(recipeName) {
    const recipeNameEl = document.querySelector('#recipeName');
    recipeNameEl.innerHTML = `<h2>${recipeName}</h2>`;
}

function addDescription(description) {
    const descriptionEl = document.querySelector('#recipe-description');
    descriptionEl.innerHTML = `<p>${description}</p>`;
}

function addIngredients(ingredients) {
    const ingredientsEl = document.querySelector('#ingredientsCard');
    const ingredientsArr = ingredients.split(/\r?\n/);
    ingredientsEl.innerHTML = `<ul list-style-type="none" id="ingredients"></ul>`;

    for (const i of ingredientsArr) {
        const ingredientsUl = document.getElementById('ingredients');
        const newIngredient = document.createElement('li');
        newIngredient.textContent = i;
        
        ingredientsUl.appendChild(newIngredient);
    }
}

function addDirections(directions) {
    const directionsEl = document.querySelector('#directionsCard');
    const directionsArr = directions.split(/\r?\n/);
    directionsEl.innerHTML = `<ol id="directions"></ol>`;

    for (const i of directionsArr) {
        const directionsOl = document.getElementById('directions');
        const newStep = document.createElement('li');
        newStep.textContent = i;

        directionsOl.appendChild(newStep)
    }
}