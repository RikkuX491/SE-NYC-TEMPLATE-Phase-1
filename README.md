# Lecture # 9 - Communicating With External APIs

## Lecture Topics
- Understand how to communicate with External APIs
- Understand how to manipulate data retrieved from External APIs when making a `GET` request

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

We will continue to build our app for the Flatburger restaurant. We will use the `fetch()` method to make a `GET` request to an External API to include additional information obtained from the External API in our app. We will be using the concepts learned in this lecture to build out this app.

1. Use the `fetch()` method to make a `GET` request to [https://api.coincap.io/v2/assets](https://api.coincap.io/v2/assets) to retrieve cryptocurrency data from the External API.