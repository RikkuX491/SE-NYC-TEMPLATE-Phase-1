# Lecture # 7 - POST Requests

## Lecture Topics
- Send a `POST` request using HTML forms and JavaScript
- Explain the difference between optimistic and pessimistic rendering

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

We will be using the `fetch()` function to make a `POST` request to the JSON server in response to form submission to add a new food object to the database in addition to updating the frontend (our webpage) to include the data for the new food. We will be using the concepts learned in this lecture to build out this app.

1. Adding to the code starting on line 46, inside of the `handleSubmit()` function, write the code to make a `POST` request to send the data stored in the `newFood` variable to add a new food to the database. The food data for the foods that are currently in the database can be viewed in the `db.json` file. Implement an optimistic rendering approach for the `POST` request.

2. Refactor your code to implement a pessimistic rendering approach for the `POST` request.

## POST (Create)
![post](assets/post.png)

`POST` requests are requests to send data to the server. The information is usually sent from a form, creating a resource in the database. A `POST` request is typically for creating new data instead of updating data, like `PATCH` requests.

A `POST` request requires an additional argument, a request/config object that contains the following information:

- Method: The HTTP method used in this request. Requests made with `fetch()` are `GET` requests by default. Though they can take a request object, it's not necessary. Other requests, such as `POST`, require the method to identify what type of request it is. 

- Headers: An object that contains additional information for the request. The `Content-Type` indicates the original media type of the data.

- Body: The data from the request. Before the request can be sent, the data must be converted to JSON.

``` javascript
const newFruit = {
    "name": "Apple",
    "description": "A very delicious fruit!",
}

fetch("http://localhost:3000/fruits", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newFruit)
})
```