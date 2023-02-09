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

`readonly` - is an attribute that makes it so the user cannot input something in the text box 

#### General things I learned
When typing an `=` after attributes, VS code automatically fills in the `""` that must follow. Elements *usually* have a separate opening tag and a closing tag, however you can open and close the element with one tag when the element only includes attributes and you don't want text inside the element. Ex: `<path insert-attributes here/>`. 
