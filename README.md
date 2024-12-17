# Lecture # 10 - Algorithmic Problem Solving

## Lecture Topics

- Define "algorithm"
- Outline the steps for solving problems using algorithms

## Setup

Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/foods](http://localhost:3000/foods)

Then, open the `index.html` file on your browser to run the application.

## Deliverables

We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

We will continue to build our app for the Flatburger restaurant. We will solve a problem using an algorithm while adding a new feature to our Flatburger restaurant app. We will be using the concepts learned in this lecture to build out this app.

1. Create a function named `reverseString()` that has one parameter named `str`. The function should reverse the string stored in the `str` parameter such that the string's letters are in reverse order. The function should return the reversed string.

```txt
Input: "Flatburger"
Return Value: "regrubtalF"
```

```javascript
reverseString("Taco")
// ocaT
```

**Do not call any type of built-in reverse method!**

Please solve the problem using iteration.

2. Use the `addEventListener()` method to allow the `<button>` element with the id of `reverse-button` to listen for a `click` event. In response to the `click` event, the following actions should take place:

   - The `reverseString()` function is called, and the `<button>`'s `textContent` attribute is passed in as an argument to the `reverseString()` function.
   - The `<button>`'s `textContent` attribute is set to the return value of the `reverseString()` function.