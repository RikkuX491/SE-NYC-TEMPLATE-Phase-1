# Lecture # 4 - DOM Manipulation

## Lecture Topics
- Explain what the DOM is
- Traverse the DOM tree
- Select single DOM elements with `.querySelector()` and `.getElementById()`
- Select multiple elements with `.querySelectorAll()` and `.getElementsByClassName()`
- Add text content to an element with `.textContent`
- Create elements with `document.createElement()`
- Append elements to the DOM with `.appendChild()` and `.append()`
- Remove content with `.remove()`
- Explain the dangers of `.innerHTML` and when it's safe to use

## Setup

Make sure that you are inside of the directory (folder) with the `index.html` file and the `src` directory (folder).

You can run the `ls` command in the terminal to view the files and directories (folders) that are within your current directory (folder):

```sh
ls
```

**Note**: For this lesson and the following lessons throughout the remainder of this phase, we will not use `node` to run our JavaScript code anymore since we will be manipulating elements on a web page, which requires us to open the HTML file on a browser.

For Mac users, run this command in the terminal to open the `index.html` file on your browser to run the application:

```sh
open index.html
```

For Windows users, run this command in the terminal to open the `index.html` file on your browser to run the application:

```sh
explorer.exe index.html
```

For `Google Chrome` browsers:

Once your browser loads the content from your `index.html` file, open `Developer Tools` in your browser and click the `Console` tab within `Developer Tools` to view any output from `console.log()` statements executed within your `index.js` file.

For `Safari` browsers:

Once your browser loads the content from your `index.html` file, open the `Web Inspector` in your browser and click the `Console` tab within the `Web Inspector` to view any output from `console.log()` statements executed within your `index.js` file.

## Deliverables 
We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

We will be adding food images to the restaurant's menu and displaying information for one of the menu items including the name, image, and description for the menu item. We will be using the concepts learned in this lecture to build out this app.

1. Given an array stored in a variable named `burgers`, write a `for` loop that will iterate through the `burgers` array. The `for` loop should do the following within its block of code for each of the burgers:
    - Create an `img` element using `document.createElement()`
    - Set the `className` attribute of the `img` element to have the value of `'burger'`
    - Set the `src` attribute of the `img` element to contain the image of the current burger
    - Use `.appendChild()` to append the `img` element to the element with the id of `restaurant-menu`
2. Given an array stored in a variable named `otherFoods`, use the `.forEach()` array iterator method to iterate through the `otherFoods` array. For each of the burgers:
    - Create an `img` element using `document.createElement()`
    - Set the `src` attribute of the `img` element to contain the image of the current food
    - Use `.appendChild()` to append the `img` element to the DOM element with the id of `restaurant-menu`
3. Search for the DOM element with the class of `detail-image`. Set the `src` attribute of this `img` element to contain the image of the first burger from the `burgers` array
4. Search for the DOM element with the class of `name`. Set the `textContent` attribute of this DOM element to have the value of the name of the first burger from the `burgers` array
5. Search for the DOM element with the id of `description-display`. Set the `textContent` attribute of this DOM element to have the value of the description of the first burger from the `burgers` array
6. Use `document.querySelectorAll()` to search for the `img` elements inside of the `div` with the id of `restaurant-menu`. For each of those `img` elements, set the `style` attribute to have the value of `"border-style: solid; border-color: red; border-width: 3px"`
7. Use `document.getElementsByClassName()` to search for the `img` elements with the class name of `burger`. For each of those `img` elements, set the `style.borderColor` attribute to have the value of `"blue"`


## Document Object Model
The DOM is an interface for web documents. A tree of Node objects that represent a web page. These Nodes allow access and change to the Document. 

## Selecting DOM elements
To manipulate the DOM, we need to use methods to traverse it and find the elements we are looking for. 


``` javascript
// Single elements
// document.querySelector() will traverse the DOM and return the first element of the matching tag, class, or id passed as an argument
// 'tag' looks for the first matching tag
document.querySelector('div')

// '.class' will look for the first matching class
document.querySelector('.someClass')

// '#id' will look for the first matching id
document.querySelector('#someID')

// document.getElementById() traverse the DOM and returns the first element with the matching id. IDs should be unique, so it should be the only element with that ID. Note: the '#' is not necessary. 
document.getElementById('someId')


// Multiple elements
// document.querySelectorAll() gets multiple elements of the matching tag or class 
// It returns a NodeList, which can be iterated over with .forEach() and for loops. 
document.querySelectorAll('div')

// document.getElementsByTagName() and document.getElementsByClassName() get every element by the matching tag/class.
// They both return HTML collections which can only be iterated over with for loops.
document.getElementsByTagName()
document.getElementsByClassName()

```

## Changing and Creating DOM Elements
Once a DOM element is selected, there are several ways of changing the content in that Node.

``` javascript
const div = document.querySelector('div')

// Text content returns the full text of a node. It's less performance heavy and works for all nodes. 

div.textContent = 'some text'


// Inner text only grabs visible text, is performance heavy, and only works on HTML elements
div.innerText = 'some text'

// document.createElement() creates a new element when provided a tag name
// A created element can be set with text content just as a element selected by the DOM can.
const newDiv = document.createElement('div')
newDiv.textContent = 'my text'

// innerHTML can add HTML content to an element. Use of this should be limited as it's slow, it clears out everything, removes event listeners, and most importantly, it's vulnerable to cross-site-scripting attacks

div.innerHTML = '<p>Use this with caution</p>'

```


## Removing elements
Once selected, elements can be removed in a couple ways.

``` javascript
// will remove the element
div.remove()

// will clear the element of all its nested children
div.innerHTML = ''

```