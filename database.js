const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const recipeCollection = client.db('startup').collection('recipe');

// Find a user by email
function getUser(email) {
    return userCollection.findOne({ email: email });
}

// Find a user by token
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

// Create a user 
async function createUser(email, password) {
const passwordHash = await bcrypt.hash(password, 10);

const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
};
await userCollection.insertOne(user);

return user;
}

// Add a recipe to the user's account.
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

// Get the recipes associated to the user.
function getRecipes(userName) {
    const query = {user: { userName }};
    const options = {
      sort: {name: 1},
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
getUser,
getUserByToken,
createUser,
addRecipe, 
getRecipes
};