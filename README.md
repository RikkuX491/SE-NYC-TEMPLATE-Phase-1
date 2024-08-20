# Lecture # 1 - JavaScript Fundamentals

## Lecture Topics
- Define what a variable is
- Initialize variables in JavaScript
- Retrieve and change the value of variables
- Explain the difference between:
    - Using `const` for declaring variables
    - Using `let` for declaring variables
- Use `console.log()` to inspect the values of variables and print those values to the console
- Use the `debugger` statement to invoke a debugger in the browser
- Explain the difference between the following data types:
    - `number`
    - `string`
    - `boolean`
- Use the `typeof` operator to check the data type of a value or variable's value
- Explain the difference between:
    - The `Number()` function
    - The `String()` function
    - The `Boolean()` function
    - The `parseInt()` function
- Understand the difference between:
    - Adding `number`s with the `+` operator
    - Subtracting `number`s with the `-` operator
    - Multiplying `number`s with the `*` operator
    - Dividing `number`s with the `/` operator
    - Getting the remainder when dividing `number`s with the `%` operator
- Concatenate strings with the `+` operator
- Interpolate Variables and Other JavaScript Expressions Inside Template Literals
- Explain the difference between the following equality operators:
    - strict equality operator `===`
    - strict inequality operator `!==`
    - loose equality operator `==`
    - loose inequality operator `!=`
- Compare numbers with relational operators:
    - greater than (`>`)
    - greater than or equals (`>=`)
    - less than (`<`)
    - less than or equals (`<=`)
- Review syntax differences between `if`, `else if` and `else` statements, ternary operators / expressions, and `switch` statements
- Explain the difference between the following logical operators:
    - `!` NOT
    - `&&` AND
    - `||` OR
- Run JavaScript (`.js`) scripts in the browser
- Run JavaScript (`.js`) scripts using `node` in the terminal
- Enter a `node` REPL session to quickly test simple JavaScript code

## Setup

Make sure that you are inside of the directory (folder) with the `index.html` file.

You can run the `ls` command in the terminal to view the files and directories (folders) that are within your current directory (folder):

```sh
ls
```

While inside of the directory (folder) with the `index.html` file, in the terminal, run these commands in the terminal to create a folder named `src` and a file named `index.js` inside of the `src` folder:

```sh
mkdir src
touch src/index.js
```

In `index.html`, add the following line of code after line 7 to run the code in the `index.js` JavaScript file whenever the `index.html` file loads in the browser:

```html
<script type="text/javascript" src="./src/index.js"></script>
```

At this point, there are 2 options to run your `index.js` JavaScript code:

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

1. Create a variable called `greeting` using `const` that is set to a `string` with the text "Welcome to Flatburger!"

2. Create a variable called `num1` using `const` that is set to a `number` with the value of `7`.

3. Create a variable called `num2` using `let` that is set to a `string` with the text "14". The number `14` should be inside of the "" marks so that the value will be a `string`, rather than a `number`.

4. Use the `typeof` operator and `console.log()` to confirm that the data type of `num2` is `string`.

5. Use the `Number()` function to convert the value of `num2` to a `number` and set `num2` to this converted value, so that `num2` will now have the value of the `number` `14` instead of the `string` with the text "14".

6. Use the `typeof` operator and `console.log()` to confirm that the data type of `num2` is `number`.

7. Create a variable called `sum` using `const` that is set to an equation that will add the variables `num1` and `num2`.

8. Create a variable called `sumString` using `const` that is set to a `string` that incorporates the values of `num1`, `num2`, and `sum` into the `string` using string concatenation or string interpolation. For example, if `num1` has the value of 7, `num2` has the value 14, and `sum` has the value of 21, the value of `sumString` should be `7 + 14 = 21`.

9. Write an `if` statement that will check if the value of `num1` is strictly equal to `7` or `49`. If `num1` is strictly equal to `7` or `49`, use `console.log()` to print the following `string` to the console: "That's a lucky number!"

10. Write an `else if` statement after the `if` statement that will check if the value of `num1` is between `7` and `49`. For this case, `num1` should be greater than `7` and less than `49`. If `num1` is between `7` and `49`, use `console.log()` to print the following `string` to the console: "That might be a lucky number!". The code inside the `else if` statement should run if the `if` statement's condition is not true.

11. Write an `else` clause after the `else if` statement that will print "That's not a lucky number." to the console using `console.log()`. The code inside the `else` clause should run if the `if` statement's condition and the `else if` statement's condition are not true.

12. Write a ternary expression that will evaluate to the `string` "Lucky Sevens!" if the value of `num1` and `num2` are both strictly equal to `7`. Otherwise, the ternary expression should evaluate to the `string` "Better luck next time". Store the result of the ternary expression into a variable called `luckyPhrase` that is declared using `const`. Then, use `console.log()` to print the value of the `luckyPhrase` variable to the console.

## Variables
A variable is a container in which we can store values for later retrieval.

Imagine a box that can hold any type of data: a number, a string, etc. We take some data that we want to store, place it inside the box, and hand the box off to the JavaScript engine, which stores it in memory. All done! Our data is safely cached until we need to access it again.

This is how we initialize variables in JavaScript. First, we declare the variable, then we assign a value to it

``` javascript
const number = 7

let phrase = "Hello World!"
```

When you declare a variable with `const`, a value must be immediately assigned to it. Variables declared with `const`, cannot be reassigned or redeclared

``` javascript
const number
//=> Uncaught SyntaxError: Missing initializer in const declaration

const number = 7

number = 8
//=> Uncaught TypeError: Assignment to constant variable.

const number = 9
//=> Uncaught SyntaxError: Identifier 'number' has already been declared
```

When you declare a variable with `let`, a value does not need to be immediately assigned to it. Variables declared with `let` can be reassigned, but they cannot be redeclared

``` javascript
let food
//=> undefined

food = "Flatburger"

let food = "Hamburger"
//=> Uncaught SyntaxError: Identifier 'food' has already been declared
```

## Data Types
Data types describe the different types or kinds of data that we will be working with and storing in variables. The four most basic data types in JavaScript are `number`, `string`, `boolean`, and `undefined`

A `number` is a numerical value such as `7` or `4.9`

``` javascript
const number = 7
```

A `string` is a series of characters such as `Hello World`. A string can be any text inside single quotes `''`, double quotes `""`, or backticks ` `` `

``` javascript
const phrase = 'Hello World!'

const anotherPhrase = "Welcome to Flatiron School!"

const yetAnotherPhrase = `Strings are awesome!`
```

A `boolean` value is one that can either be `true` or `false`

``` javascript
let isStudent = true

let isHungry = false
```

`undefined` represents something that will have a value eventually. When a variable has been declared but has not yet been assigned a value, the value of that variable will be `undefined`. In the example below, the value of the `name` variable will be `undefined`, which is like saying we haven't decided on a name yet, but we plan to give it a value at some point

``` javascript
let name
//=> undefined
```

`null` can be assigned to a variable as a representation of no value or that the value does not exist. `null` and `undefined` are not the same. In the example below, we assign the value of `null` to the `name` variable, which is like saying there is no name

``` javascript
let name = null

null === undefined
//=> false
```

The `typeof` operator can be used to check the data type of a value or variable's value

``` javascript
typeof 7
//=> 'number'

typeof "Hello"
//=> 'string'

typeof true
//=> 'boolean'

typeof undefined
//=> 'undefined'

let name

typeof name
//=> 'undefined'

name = "Alice"

typeof name
//=> 'string'
```