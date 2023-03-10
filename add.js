const { doc } = require("prettier");

function addRecipeName() {
    const recipeNameEl = document.querySelector('#recipeName');
    const recipeName = document.getElementById('name-input').value;
    recipeNameEl.innerHTML = `<h2>${recipeName}</h2>`;
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
function createRecipe() {

}
