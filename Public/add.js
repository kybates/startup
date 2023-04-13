// function addRecipeName() {
//     const recipeNameEl = document.querySelector('#recipeName');
//     const recipeName = document.getElementById('name-input').value;
//     recipeNameEl.innerHTML = `<h2>${recipeName}</h2>`;
// }

// function addDescription() {
//     const descriptionEl = document.querySelector('#recipe-description');
//     const description = document.getElementById('description-input').value;
//     descriptionEl.innerHTML = `<p>${description}</p>`;
// }

// function addIngredients() {
//     const ingredientsEl = document.querySelector('#ingredientsCard');
//     const ingredients = document.getElementById('ingredients-input').value;
//     const ingredientsArr = ingredients.split(/\r?\n/);
//     ingredientsEl.innerHTML = `<ul list-style-type="none" id="ingredients"></ul>`;

//     for (const i of ingredientsArr) {
//         const ingredientsUl = document.getElementById('ingredients');
//         const newIngredient = document.createElement('li');
//         newIngredient.textContent = i;
        
//         ingredientsUl.appendChild(newIngredient);
//     }
// }

// function addDirections() {
//     const directionsEl = document.querySelector('#directionsCard');
//     const directions = document.getElementById('directions-input').value;
//     const directionsArr = directions.split(/\r?\n/);
//     directionsEl.innerHTML = `<ol id="directions"></ol>`;

//     for (const i of directionsArr) {
//         const directionsOl = document.getElementById('directions');
//         const newStep = document.createElement('li');
//         newStep.textContent = i;

//         directionsOl.appendChild(newStep)
//     }
// }


function getCurrentUser() {
    return localStorage.getItem('userName');
}


async function saveRecipe() {
    const currentUser = this.getCurrentUser();
    const recipeName = document.getElementById('name-input').value;
    const description = document.getElementById('description-input').value;
    const ingredients = document.getElementById('ingredients-input').value;
    const directions = document.getElementById('directions-input').value;
    const newRecipe = { user: currentUser, name: recipeName, description: description, ingredients: ingredients, directions: directions };

    try {
      const response = await fetch('/api/recipe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newRecipe),
      });

      // Store what the service gave us as the high scores
      const recipes = await response.json();
      localStorage.setItem('recipes', JSON.stringify(recipes));
      window.location.href = 'recipes.html';
    } catch {
      // If there was an error then just track scores locally
      this.updateRecipesLocal(newRecipe);
    }
  }

  function updateRecipesLocal() {
    console.log('Something went wrong.')
  }