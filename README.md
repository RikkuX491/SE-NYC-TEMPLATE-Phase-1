# Lecture # 11 - Context in JavaScript

## Lecture Topics

- Introduce execution context
- Define the `this` keyword
- Explicitly override the default context with the `call()` and `apply()` methods
- Explicitly lock the context object for a function with the `bind()` method
- State the cause of the lost context bug
- Learn how to avoid the lost context bug
- Learn how to regain access to the lost context
- Use an arrow function expression to create a function without its own context

## Setup

Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/foods](http://localhost:3000/foods)

Then, open the `index.html` file on your browser to run the application.

## Deliverables

Write your solution code in the `index.js` file in the `src` folder.

We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

We will continue to build our app for the Flatburger restaurant. We will update one of our functions and use our knowledge of Context in JavaScript to take a different approach to send data to the function. We will be using the concepts learned in this lecture to build out this app.

1. Modify the `displayFoodDetails()` function as follows:
   - The `displayFoodDetails()` should not have any parameters.
   - All references to `food` within the `displayFoodDetails()` function should be replaced with the `this` keyword (since the food `object` should be accessible as context within the `displayFoodDetails()` function rather than passing it as an argument).

2. After the food data is retrieved from the server, the `call()` method should be called on `displayFoodDetails` and the first food retrieved from the server (i.e.: the first food `object` from the `foods` parameter) should be passed into the `call()` method so that the food `object` will be accessible via the `this` keyword within the `displayFoodDetails()` function.

3. In response to the `mouseover` event for `imgElement`, the `call()` method should be called on `displayFoodDetails` and `food` should be passed into the `call()` method so that the `object` stored in `food` will be accessible via the `this` keyword within the `displayFoodDetails()` function.