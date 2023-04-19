# startup
## Console

- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual

## Development environment

To create a repository: `git init` (it is easier to create repositories in GitHub and then clone it to development environment)
  
To clone a repository: `git clone "<url>"`

To add a new line of text: `printf "\nNew line in file\n" >> README.md`

To commit changes: `git commit -am "update(notes) comments about changes"`

To push changes: `git push`

To get the latest information about the changes on GitHub: `git fetch` 

To see differences between clones and missing commits: `git status`

To pull changes: `git pull`

To get a copy of an open source code base: `fork a repo`

## Start up specification

Are you tired of looking up the same recipe everytime you want to use it or endlessly thumbing through cookbooks to find the recipe you're looking for? The RecipeMe application makes it so you can organize all of your favorite recipes in a single location and quickly find them by looking them up. It also provides an easy way to share recipes with your friends. RecipeMe will save you time (and cupboard space) so that you can enjoy sharing your delectable dishes with your friends and family.

![startup_specification](https://user-images.githubusercontent.com/123604267/215237988-10224067-46f0-4b29-9f89-b539e6b2e2e5.jpg)

### Key features:
- Secure login
- Ability to browse your recipes
- Search bar to easily find recipes using key words
- Ability to add new recipes
- Capacity to organize recipes by groups
- Ability to share recipes with friends
- Capacity to edit recipes after they are initially added

## AWS
IP address: http://3.136.128.254/

To access from the console: `➜  ssh -i [key pair file] ubuntu@[ip address]`

## DNS
To find an IP address for any domain: `dig [domain name]`

To get information about a domain name: `whois [domain name]`

An `address` or `A` record mapgs a domain name directly to an IP address

A `canonical name` or `CNAME` maps one domain name to another domain name

## HTML

### Things I learned from Simon html
`<thead>` - table header

`<th>` - columns names in the table header

`<hr />` - html design element that adds a line

`<menu>` - an input alternate to unordered lists

`readonly` - an attribute that makes it so the user cannot input something in the text box 

`charset` - specifies character encoding

`UTF-8` - a character coding system

#### General things I learned
When typing an `=` after attributes, VS code automatically fills in the `""` that must follow. Elements that only contain attributes and don't include any text can be opened and closed with only one tag. Ex: `<path insert-attributes here/>`. 

## CSS

### Things I learned from Simon CSS

`!important` - overrides the default bootstrap property

`rgb()`, `#`, and `color name` - can all be used when selecting colors (for rgb, red comes first, then green, then blue)

`border-radius` - 50% makes a circle, you can adjust this to make semi circles, quarter circles, etc.

Image
  ```
  <img
    alt="mountain landscape"
    src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg"
  />
  ```

Audio
`<audio controls src="testAudio.mp3"></audio>`

Video
  ```
  <video controls width="300" crossorigin="anonymous">
    <source
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  </video>
  ```

Associate html with css - `<link rel="stylesheet" href="styles.css" />`

##### Import fonts

  ```
  @import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

  p {
    font-family: 'Rubik Microbe';
  }
  ```
  
##### Animations

  ```
  p {
    text-align: center;
    font-size: 20vh;

    animation-name: demo;
    animation-duration: 3s;
  }
  
  @keyframes demo {
    from {
      font-size: 0vh;
    }

    to {
      font-size: 20vh;
    }
  }
  ```

#### Selectors

Descendant - `body section`

Child - `section > p`

General sibling - `p ~ div`

Adjacent sibling - `p + div`

ID selector - `#id`

Class selector - `.class`

Pseudo selector - ex: `section:hover {
  border-left: solid 1em purple;
}`

### Bootstrap classes

`container-fluid` - makes a container with the width of the viewport

`navbar fixed-top` - navigation bar that is fixed at the top of the screen

`navbar-brand` - specifically for the "brand" or website name 

`nav-link active` - changes the link of the current page to show that it is the page currently being used

#### General things I learned

You can give an element more than one class to be able to apply several CSS effects to that element. Ex: `<div class="controls center"></div>`. This is also true for Boostrap. Ex: `<nav class="navbar fixed-top navbar-dark">`. It's a lot easier to use bootstrap to create images rather than using HTML to create SVGs. 

## Things I learned from Startup HTML/CSS

Cards can be made into buttons using the following code: `<a class="card-block stretched-link text-decoration-none text-dark" href="add.html">`

Buttons can be icons: `<button class="btn btn-secondary material-symbols-outlined margin-left left-button">share</button>`

For unordered lists you can use `list-style: none` to get rid of bullet points.

You can force images to have certain dimensions.

Ex:

  ```
  img {
    object-fit: cover;
    width: 230px;
    height: 230px;
  }
  ```

### General things I learned:

You can create classes for elements just to apply specific effects and then use them for a variety of elements that you all want to have the same rules/look. VS code will yell at you for creating "empty rulesets" but this does not mean the class/element your trying to apply rules to doesn't exist. It's just waiting for you to actually type in rules and then it stops yelling at you. It helps to work on each of the html files one at a time (and to not procrastinate) because it can be a lot of code and different pages, and it can get confusing. 

## Things I learned from Simon Javascript:

`localStorage` - access local storage

`.getItem` - retrieve an item from local storage

`.setItem` - create an item in local storage

`window.location.href` - returns the URL of the current page

`document.querySelector('#id')` - select elements by id

`document.querySelectorAll('.class')` - select elements by class

`element.appendChild(child)` - add a child element to a parent

`innerHTML` - sets the inner html of an element

`document.createElement()` - creates elements

`sequence.length` - returns length of a sequence

`??` - if the item you're trying to get doesn't exist use the following string Ex:`return localStorage.getItem('userName') ?? 'Mystery player';`

#### Javascript data types
| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

#### Conditionals

JavaScript supports many common programming language conditional constructs. This includes `if`, `else`, and `if else`. Here are some examples.

```js
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```

#### Loops

##### For

```js
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```

##### do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```

##### while

```js
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

##### for in

The `for in` statement iterates over an object's property names.

```js
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```

For arrays the object's name is the array index.

```js
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```

##### for of

The `for of` statement iterates over an iterable's (Array, Map, Set, ...) property values.

```js
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```

#### Array functions

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop`                   |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function sort an array in place                     | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

### General things I learned:

Javascript booleans are ALL lower case (`true` and `false`). If you capitalize them, they are not recognized as booleans. `id`s's in HTML are important for both CSS and Javascript. They help when you want to select a specific element for DOM. `<script>` must come at the end of an html if the Javascript references elements or IDs. 

### JSON to Javascript:

```
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

## Things I learned from Startup Javascript:

You can link several js scripts to one html for functionality. I learned how to make a search bar!! Which I am pretty stoked about. When your looping through an array, it's important to use a for of loop so that you can loop through the actual values in the array instead of the indices of those values. I had forgotten about that. I also learned how to take input values and split them by a new line character, and then stick them into my html. 

As far as I am aware, I think most of my application requires service implementation, so that people can save and access there recipes. Since we haven't learned that quite yet, my app isn't super functional. However, I wrote up some mock functions to utilize when we get there so that my app actually serves a purpose eventually. 

## URL

URL syntax: 

The only required parts are the scheme and the domain name.

- Scheme: The protocol required to ask for teh resource. For web apps, usually HTTPS.
- Domain name: The domain name that owns the resource represented by the URL
- Port: The numbered network port used to connect to the domain server. Lower numbers are for common internet protocols. Ex: 443 if the scheme is HTTPS.
- Path: The path to the resource on the domain.
- Parameters: key-value pairs (query string)
- Anchor: usually a sublocation in the resource

## HTTP

An HTTP request has this general syntax:

```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
 ]
```

An HTTP response has this general syntax:

```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

Common verbs:

- `GET` - Get the requested resource.
- `POST` - Create a new resource.
- `PUT` - Update a resource. The URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the update resource. The body of the response may contain the resulting update resource.
- `DELETE` - Delete a resource.
- `OPTIONS` - Get metadata about a resource.

## SOP and CORS

SOP: Same Origin Policy: only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing

CORS: Cross Origin Resource Sharing (CORS): allows the client to specify the origin of a request and then let the server respond with what origins are allowed.

## Things I learned from Simon Service:

The web applications files are loaded on the browser. This is simply the front-end of the application. The back-end is the "service" that is hosted on the server in Ohio. This is doing all the endpoints and things to send to the front-end. The Node.js works with the Middleware that allows you to host your front-end files.

Express middleware:

`app.use(express.static('public'));`

```
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
 });
 ```
  
It's important to put basically all of your app files into the public file so that the Middleware can find the static files.

In short the service does two main things:

1. Hosting static files for front-end

2. Hosting endpoints for back-end

Make sure startup port is 4000.

`F5` to debug using node.js

## Things I learned from Simon Database:

`process.env.$VARNAME` retrieves the environment variables you have set in the .zprofile file

To set environment variables you have to edit the `~/.zprofile` with `export $VARNAME=value` then to save the file, do `source ~/.zprofile`

`insertOne` - function to insert a document into database

`find(query, options)` - search for a document

## Things I learned from Simon Login

`bcrypt.hash(password, 10` - bcrypt is a package. This code will hash the entered password 10 times.

`bcrypt.compare(req.body.password, user.password)` - compare passwords to authorize user.

`req.body.value` - This retrieves a value from the body of you

`uuid` is also a package creates a unique token for each user when they create an account

`409 error` - this user already exists error

`await collection.insertOne(user);` insert user object into mongodb. When you insert a user object Mongo inserts an id for the object i.e. `{id: user._id}`.

`setAuthCookie(res, user.token)` - return a cookie header with user token 

`GET /api/user/me` - get information about me (the user). Used to authenticate the user.

`req.cookies['token']` 

`401 error` - the user is not authorized

`client.db('simon').collection('user');` create a new collection in the mongo database

When creating the login function, if the user types in an incorrect user, throw a 401 error instead of a 404 error. This way hackers wouldn't know if a user does or does not exist. With any cookie authentication you want to set the following cookie headers: `secure: true;`, `httpOnly: true;`, `sameSite: 'strict';`. Logging out just deletes the cookie from the header. Then they have to log in again. The cookie contains the token.

## Things I learned from Simon Websocket

Peer to peer communication has to happen through the server. Websocket is how the live server works! When we are creating our own server instead of letting Websocket do it, we have to upgrade the http connection ourselves. We use ping/pong protocol to keep the Websocket server running while there are people "alive".

`const {WebSocketServer} = require('ws');`

`socket.send('message')` - this sends a message to the server/client

## Things I learned from Simon-React

`npx create-react-app react-template`

`npm uninstall web-vitals`

`start` - used for debugging 

`build` - actually for deploying the web app

Instead of `<a class='' href=''>Name</a>` use `<NavLink className='' to=''>Name</NavLink>`

Footers and headers are represented by the parent. Basically we just need to go grab the `<main>` elements from each of our pages and put them into an associated .jsx file. There is just a little adjustment from the js syntax to jsx. We use state variables a lot.

## Things I learned from Startup Service

Service endpoints aren't actually as scary as they seem. 

In order to create a query using the `_id` given to each object when put into the mongodb, you have to do the following: `const query = { _id: new ObjectId(recipeId) }`. You also have to make sure you import `ObjectId` from mongodb at the top of your js file. 

For some reason, you can straight up just return the response from a fetch call (or if you can return pieces of it I didn't figure out how). You have to just pass the response into other functions to be utilized and displayed.

Debugging the front end can be done in the browser using F5. Debugging the back end is done in visual studio code. You can also just run `node index.js` in the terminal. It will give you console outputs there as well. 

`req.params.variable` vs `req.body` - The first is useful when you are using a variable the route path and then you want to pass that into the database function to query using that parameter. The second is also useful when you have a JSON object and want to access one of the values for a key. Basically they're both useful.

It's really important to have all the necessary packages installed in your development environment because if you don't have thenm installed, your web app will explode if you don't. 
