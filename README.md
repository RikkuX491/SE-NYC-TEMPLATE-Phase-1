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

## Introduction

Today we will continue to build our app for the Flatburger restaurant. We will use fetch() to make a GET request to an External API to include additional information obtained from the External API in our app. We will be using the concepts learned in this lecture to build out this app.