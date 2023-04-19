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
    const user = recipe[1].user;
    const recipeId = recipe[1]._id;

    const mainEl = document.querySelector('#main')
    mainEl.innerHTML = `<button class="btn btn-secondary" id="go-back-button" onclick="window.location.href='recipes.html'">Go back to my recipes</button>
    <div class="container-fluid recipe-name-container">
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

    <div class="button-container">
      <button type="button" class="btn btn-danger" onclick="deleteRecipe('${recipeId}')">
        Delete recipe
      </button>
    </div>`;

  addRecipeName(recipeName);
  addDescription(description);
  addIngredients(ingredients);
  addDirections(directions);
  broadcastEvent(user, "openedRecipe", recipe[1].name)
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


function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  console.log(socket)
  socket.onopen = (event) => {
    displayMsg('system', 'session', 'connected');
  };
  socket.onclose = (event) => {
    displayMsg('system', 'session', 'disconnected');
  };
  socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === "createdRecipe") {
      displayMsg('user', msg.from, `created a new recipe: ${msg.value}`);
    } else if (msg.type === "openedRecipe") {
      displayMsg('user', msg.from, `is making ${msg.value}` )
    }
  };
}

function displayMsg(cls, from, msg) {
  console.log(msg)
  const chatText = document.querySelector('#user-messages');
  chatText.innerHTML = chatText.innerHTML + `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>`;
}

function broadcastEvent(from, type, value) {
  const event = {
    from: from,
    type: type,
    value: value,
  };
  socket.send(JSON.stringify(event));
}

async function deleteRecipe(recipeId) {
  const response = fetch(`/api/recipes/${recipeId}`, {
  method: 'DELETE',
}).then(window.location.href = 'recipes.html');
};

loadRecipes();
configureWebSocket();
