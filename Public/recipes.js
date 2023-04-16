async function loadRecipes() {
    let recipes = [];
    try {
      // Get the user's recipes from the service
      const response = await fetch('/api/recipes');
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
    
    showTheRecipes(recipes);
  }
  
  function showTheRecipes(recipes) {
    for (const recipe of recipes.entries()) {
      getRandomPicture(recipe)
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
    console.log(data[0].id)
    const imgUrl = `https://picsum.photos/id/${data[0].id}/300`
    const newChild = document.createElement('div');
    newChild.className = "card recipe-card"
    newChild.innerHTML = 
    `<a class="card-block stretched-link text-decoration-none text-dark" href="add.html">
        <img src=${imgUrl} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title recipe-title">${recipeName}</h5>
        <p class="card-text">${description}</p>
        </div>
    </a>`;
  
    recipesEl.appendChild(newChild);
  }

  loadRecipes();
