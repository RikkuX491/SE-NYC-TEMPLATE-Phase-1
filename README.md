# Lecture # 8 - PATCH & DELETE Requests

## Lecture Topics

- Send a `PATCH` request using HTML forms and JavaScript
- Send a `DELETE` request using HTML buttons and JavaScript

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

We will be using the `fetch()` function to make a `PATCH` request to the JSON server in response to form submission to update the value for `number_in_cart` for a food object in the database in addition to updating the frontend (our webpage) to update the data for the `number_in_cart` for the food. We will also be using the `fetch()` function to make a `DELETE` request to the JSON server in response to a `click` event to delete a food from the database in addition to updating the frontend (our webpage) to remove the food from the `restaurant-menu`. We will be using the concepts learned in this lecture to build out this app.

Write your solution code for these deliverables in the `index.js` file:

1. Adding to the code starting on line 77 in `index.js`, inside of the `addToCart()` function, write the code to make a `PATCH` request to persist changes to update the `number_in_cart` for the displayed food when the `Add to Cart` button is clicked. The food data for the foods that are currently in the database can be viewed in the `db.json` file. Implement an optimistic rendering approach for the `PATCH` request.

2. Refactor your code to implement a pessimistic rendering approach for the `PATCH` request.

3. Adding to the code starting on line 22 in `index.js`, inside of the callback function in `imgElement.addEventListener()`, write the code to make a `DELETE` request to persist changes to delete the food from the database when an image is clicked within the `restaurant-menu`. The food data for the foods that are currently in the database can be viewed in the `db.json` file. Implement an optimistic rendering approach for the `DELETE` request.

4. Refactor your code to implement a pessimistic rendering approach for the `DELETE` request.

## PATCH (Update)

`PATCH` requests are requests to update / modify a resource.

- The url in a `PATCH` request requires an id to identify the resource being updated. 
- The HTTP `method` is `'PATCH'`
- The `body` can take the full resource or one property of the resource.

``` javascript
let exampleID = 7

fetch(`http://localhost:3000/foods/${exampleID}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "Spaghetti"})
})
```

## DELETE

`DELETE` requests are requests to remove a resource from the server. Unlike `POST` requests and `PATCH` requests, `DELETE` requests don't require headers or a body, though some backend frameworks may require a header.

`DELETE` requests do require the `method` and the id of the resource being deleted.

``` javascript
let exampleID = 7

fetch(`http://localhost:3000/foods/${exampleID}`, {
    method: 'DELETE'
})
```