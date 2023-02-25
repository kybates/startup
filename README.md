# startup
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

A `canonical name` or `CNAME` maps one domain name to anotehr domain name

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
