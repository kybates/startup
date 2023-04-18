const {MongoClient, ObjectId} = require('mongodb');
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
function addRecipe(recipe) {
    recipeCollection.insertOne(recipe);
  }

// Get the recipes associated to the user.
function getRecipes() {
    const cursor = recipeCollection.find();
    return cursor.toArray();
}

function deleteRecipe(recipeId) {
    const query = { _id: new ObjectId(recipeId) }
    recipeCollection.deleteOne(query);
}


module.exports = {
getUser,
getUserByToken,
createUser,
addRecipe, 
getRecipes,
deleteRecipe
};
