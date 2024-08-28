# Lecture # 5 - DOM Events

## Lecture Topics
- Explain the importance of event handling in modern web applications
- Explain how callback functions are used with event listeners
- Write the code to add `click` and `submit` event listeners to elements using the `.addEventListener()` method
- Explain the purpose of the `.preventDefault()` method

## Setup

Make sure that you are inside of the directory (folder) with the `index.html` file and the `src` directory (folder).

You can run the `ls` command in the terminal to view the files and directories (folders) that are within your current directory (folder):

```sh
ls
```

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

We will be adding a feature that displays information for one of the menu items including the name, image, and description for the menu item within a food detail section of the page when the image for the menu item is clicked within the menu. We will also be adding a feature that allows a user to add a new food to the menu using an HTML form. We will be using the concepts learned in this lecture to build out this app.

1. Use the `addEventListener()` method to allow each of the `<img>` elements in the `div#restaurant-menu` element to listen for a `click` event. In response to the `click` event, display the details (name, image, and description) for a specific food, depending on which `<img>` element is clicked. You should be adding to the code in the callback function inside of `foods.forEach()` since that is where each of the `<img>` elements are being created.

2. Use the `addEventListener()` method to allow the `<form>` element with the id of `new-food` to listen for a `submit` event. In response to the `submit` event, a new `<img>` element should be added to the `div#restaurant-menu` element. The value of the `src` for this new `<img>` element depends on the information that the user enters in the `<input>` element with the id of `new-image`. Additionally, clicking on this new `<img>` element with result in displaying the details (name, image, and description) for that food. You will need to use the information that the user enters in the `<input>` elements with the ids of `new-name`, `new-image`, and `new-description` to fully build out this feature. Don't forget to use the `.preventDefault()` method to prevent the page from refreshing when the form is submitted.

## Events
When the user interacts with the DOM, it fires events that trigger an effect in our JavaScript code that can do something. Such as updating the DOM or adding content to the database. 

To pick up events, our code must 'listen' for the event. The `.addEventListener()` method will do just that. It takes 2 arguments, the first is the event it's listening for, and the second is the function that will run once the event is triggered.

``` javascript
div.addEventListener('click', () => console.log('hi'))

// When events are triggered, the event object is passed as an argument to the event handler function (the callback passed as the second arg to addEventListener)
div.addEventListener('click', (e) => console.log(e))

```

There are many event types: [Events](https://developer.mozilla.org/en-US/docs/Web/Events)


## Forms
Forms can have a variety of user inputs users can interact with.
The submit event can be used to retrieve the value of those inputs. 

When a form submits, it will, by default, try to send a request and refresh the page. To prevent that, we need to call the `.preventDefault()` method on the event object. Afterward, the event can be used to grab the form values through the target attribute.

``` html
<form>
  <input type="text" name='favColor'/>
  <input type="submit" />
</form>
```

``` javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Here we are using the name property from the form to target the specific input.
  console.log(e.target.favColor.value)
})
```
