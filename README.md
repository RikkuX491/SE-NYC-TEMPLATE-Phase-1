# Lecture # 2 - Functions & Scope

## Lecture Topics
- Describe what functions are and their central importance in JS
- Understand how to declare and call functions
- Understand how to return a value from a function
- Understand the purpose of function parameters and default arguments
- Define a function using a function expression
- Define a function using an arrow function expression
- Review syntax differences between regular functions and arrow functions
- Explain the difference between:
    - Block scope
    - Function scope
    - Global scope
- Understand what it means that functions are first-class objects
- Explain what a higher-order function is

## Setup

Make sure that you are inside of the directory (folder) with the `index.html` file and the `src` directory (folder).

You can run the `ls` command in the terminal to view the files and directories (folders) that are within your current directory (folder):

```sh
ls
```

There are 2 options to run your `index.js` JavaScript code:

1. Run this command in the terminal to run your `index.js` JavaScript code using `node`:

```sh
node src/index.js
```

2. Open the `index.html` file on your browser to run the application:

For Mac users, run this command in the terminal:

```sh
open index.html
```

For Windows users, run this command in the terminal:

```sh
explorer.exe index.html
```

For `Google Chrome` browsers:

Once your browser loads the content from your `index.html` file, open `Developer Tools` in your browser and click the `Console` tab within `Developer Tools` to view any output from `console.log()` statements executed within your `index.js` file.

For `Safari` browsers:

Once your browser loads the content from your `index.html` file, open the `Web Inspector` in your browser and click the `Console` tab within the `Web Inspector` to view any output from `console.log()` statements executed within your `index.js` file.

## Deliverables

Write your code in the `index.js` file that is in the `src` folder.

1. Create a function named `flatburgerGreeting()` that prints the `string` "Welcome to Flatburger!" to the console using `console.log()`

2. Create a function named `printGreeting()` that has one parameter named `greeting`. The function should print the value of the parameter `greeting` to the console using `console.log()`.

3. Create a function named `getSum()` that has two parameters `num1` and `num2`. The `return` value of this function should be the value resulting from the sum of values of the parameters `num1` and `num2`.

4. Create a function expression using an anonymous function. The anonymous function should be assigned to a variable named `getSumString`. The anonymous function should have three parameters: A parameter named `sum` whose value should be a callback function, and two parameters `num1` and `num2` whose values should be `number`s. When calling the `sum()` function, `num1` and `num2` should be passed in as arguments to the `sum()` function. The `return` value of the anonymous function should be a `string` that incorporates the values of `num1`, `num2`, and the `return` value of `sum()` into the string using string concatenation or string interpolation. For example, if `num1` has the value of `7`, `num2` has the value `14`, and the `return` value of `sum()` has the value of `21`, the `return` value of the anonymous function should be `7 + 14 = 21`.

5. Create a function expression using an arrow function. The arrow function should be assigned to a variable named `getAverage`. The arrow function should have two parameters: `num1` and `num2` whose values should be `number`s. Assign a default argument of `0` to `num1`. Assign a default argument of `0` to `num2`. The arrow function should return the average of the two numbers with an implicit return.

Hint: If the function body of an arrow function consists of a single expression, we do not need to wrap it in curly braces. When there are no braces, arrow functions have an implicit return, i.e., they automatically return the result of the last expression! This is the only situation in which a JavaScript function doesn't require an explicit return with the return keyword.

## Functions
Functions are like a little program. They consist of a set of statements/tasks and return a value or undefined. 

``` javascript
// This is an example of a function declaration.
// This function is returning the string of 'Good morning!'

function sayGoodMorning() {
    return 'Good morning!'
}

// This is a function reference but it doesn't actually run the function. 

sayGoodMorning

// To run or call or invoke the function (all the same thing) - write the function's name and add a pair of ()

sayGoodMorning()

// This function prints the string of 'hello' to the console using console.log() but returns undefined because it does not have the return keyword.

function sayGoodNight(){
    console.log('Good Night!')
}

sayGoodNight()

// console logging and returning are not the same thing. A return value becomes the value of an invoked function, while console.log() only logs something to the console.

```

Functions can take unique localized variables called parameters. When the function is invoked, it's passed an argument that becomes the parameter's value.

``` javascript

function squareNumber(num){
    
    // num is the parameter, it is scoped to the inside of the function

    return num * num
}

// 7 is the argument here. The value of num in the above function becomes 7.

squareNumber(7)

// functions can take multiple parameters.

function subtract(num1, num2){
    return num1 - num2
}

subtract(12, 4)

```

Arrow functions are another way to declare functions with some added benefits.

``` javascript
// An arrow function can avoid {} if its return is done on a single line or with ()
// An arrow function with a single parameter doesn't need the () around the parameter.

const welcomeMessage = name => `Welcome to Flatiron School, ${name}! Have a great day!`

const favoriteSeason = season => (
     `My favorite season is ${season}`
)

favoriteSeason('summer')

```


## Callbacks and Higher-Order Functions

Functions in JavaScript are treated like any other variable. When functions are treated like this, we refer to them as First class. One of the most significant benefits of this is that functions in JavaScript can be passed as arguments to other functions.

``` javascript
// A function that returns a function or takes a function as an argument is called a Higher-Order Function

const outsideFunction = () => {
    return () => {
        // inside function
    }
}

// A function that is taken as an argument is a callback function

const fullMessage = (greeting, name) => {
    return `${greeting(name)} I love JavaScript!`
}

const welcomeMessage = name => `Welcome to Flatiron School, ${name}! Have a great day!`

fullMessage(welcomeMessage, 'Bruce Wayne')

```