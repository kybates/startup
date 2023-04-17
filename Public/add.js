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