function addRecipeName() {
    const recipeNameEl = document.querySelector('#recipeName');
    const recipeName = document.getElementById('text-input').value;
    recipeNameEl.innerHTML = `<h2>${recipeName}</h2>`;
}

function addIngredients() {
    const ingredientsEl = document.querySelector('#ingredientsCard');
    const recipeName = document.getElementById('text-input').value;
    ingredientsEl.innerHTML = `<h2>${recipeName}</h2>`;
}

function addDirections() {

}

function createRecipe() {

}