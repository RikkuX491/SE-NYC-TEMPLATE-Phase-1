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