async function loadRecipes() {
    let recipes = [];
    try {
      // Get the user's recipes from the service
      const response = await fetch('/api/recipes');
      console.log(response);
      recipes = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('recipes', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      console.log("There was a problem loading recipes.");
    }
  
    displayRecipes(recipes);
  }
  
  function displayRecipes(recipes) {
    const recipesEl = document.querySelector('#recipes');
    
    if (recipes.length) {
      // Update the DOM with the scores
      for (const [i, recipe] of recipes.entries()) {
        const recipeName = recipe.name;
        const description = recipe.description;
        const newChild = document.createElement('div');
        newChild.innerHTML = `<div class="card">
        <a class="card-block stretched-link text-decoration-none text-dark" href="add.html">
            <img src="add.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${recipeName}</h5>
            <p class="card-text">${description}</p>
            </div>
        </a>
        </div>`;
      
        const parentElement = document.querySelector("recipe-card-container");
        parentElement.appendChild(newChild);
      }
    } else {
      recipesEl.innerHTML = ``;
    }
  }
  
  loadRecipes();
