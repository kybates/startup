const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const recipeCollection = client.db('startup').collection('recipe');

function addRecipe(recipeName, summary, ingredients, directions, userName) {
    const recipe = {
        user: userName,
        name: recipeName,
        summary: summary,
        ingredients: ingredients,
        directions: directions 
    }
    recipeCollection.insertOne(recipe);
  }

function getRecipes(userName) {
    const query = {user: { userName }};
    const options = {
      sort: {name: 1},
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {addRecipe, getRecipes}