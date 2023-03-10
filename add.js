function addRecipeName() {
    const recipeNameEl = document.querySelector('#recipeName');
    const recipeName = document.getElementById('name-input').value;
    recipeNameEl.innerHTML = `<h2>${recipeName}</h2>`;
}

function addIngredients() {
    const ingredientsEl = document.querySelector('#ingredientsCard');
    const ingredients = document.getElementById('ingredients-input').value;
    ingredientsEl.innerHTML = `<div><ul><li>${ingredients}</li></ul></div>`;
}

function addDirections() {
    const directionsEl = document.querySelector('#directionsCard');
    const directions = document.getElementById('directions-input').value;
    directionsEl.innerHTML = `<div><ol><li>${directions}<li></ol></div>`;
}

function createRecipe() {

}