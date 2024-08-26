# Lecture # 3 - JavaScript Data Structures & Array Iteration

## Lecture Topics
- Describe what arrays and objects are and their central importance in JS
- Understand how to add elements to an array, remove elements from an array, and replace elements in an array
- Understand how to modify objects
- Review syntax differences between `for` loops and `while` loops
- Explain the difference between looping over arrays with a `for` loop and iterating over arrays with the `for...of` statement
- Iterate over the properties in an object with the `for...in` statement
- Explain the difference between the following array iterator methods:
    - The Array `.find()` method
    - The Array `.filter()` method
    - The Array `.map()` method
    - The Array `.forEach()` method

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

We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

Today we will learn about JavaScript Data Structures and Array Iteration to accomplish some tasks related to displaying data on the website.

1. Initialize a variable named `foodsArray` using `const` and assign it the value of an empty array `[]`.

2. Initialize a variable named `burgerObject` using `const` and assign it the value of an `object` that has a `name` key with the value of the `string` "Flatburger".

3. Modify the `burgerObject` object using dot notation to add a `description` property to it with the value of the `string` "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!".

4. Modify the `burgerObject` object using bracket notation to add a `price` property to it with the value of the `number` `14.99`.

5. Add `burgerObject` to the array stored in the `foodsArray` variable.

6. Initialize a variable named `burgerObject2` using `const` and assign it the value of an `object` that has the following key and value pairs - `name: "Maple Bacon Burger"`, `description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"`, `price: 7.99`. Add `burgerObject2` to the array stored in the `foodsArray` variable.

7. Create 3 more objects that have `name`, `description`, and `price` keys. Pick any values of your choosing in regards to the values for `name`, `description`, and `price` for each of the foods. Add these 3 objects to the array stored in the `foodsArray` variable.

8. Write a `for` loop that will loop over the `foodsArray` array and print the `name` of each of the food objects in the array using `console.log()`.

9. Write a `for...of` statement that will iterate over the `foodsArray` array and print the `description` of each of the food objects in the array using `console.log()`.

10. Iterate over the `foodsArray` array using the `.forEach()` array iterator method and print the `price` of each of the food objects in the array using `console.log()`.

11. Find the food that has the name "Flatburger" in the `foodsArray` array using the `.find()` array iterator method.

12. Find the foods that have a price less than `10.99` in the `foodsArray` array using the `.filter()` array iterator method.

13. Use the `.map()` array iterator method on `foodsArray` to `return` a new array that only contains the `price` for each of the foods.

## Arrays
An `Array` is a list, with the items listed in a particular order, surrounded by square brackets `[]` and separated by commas:

``` javascript
["Apple", "Banana", "Cherry"]
// => ["Apple", "Banana", "Cherry"]
```

The *members* or *elements* in an `Array` can be data of any type in JavaScript:

``` javascript
["Welcome to Flatburger!", 7, true]
// => ["Welcome to Flatburger!", 7, true]
```

Just like any other type of JavaScript data, we can assign an Array to a variable:

``` javascript
const fruits = ["Apple", "Banana", "Cherry"]

const numbers = [2, 4, 6, 8, 10]
```

We can find out how many elements an `Array` contains by checking the `Array`'s built-in `length` property:

``` javascript
const students = ["Alice", "Bob", "Chloe", "Dylan", "Eva", "Frank", "Grace"]

students.length
// => 7
```

To access an element, we use bracket notation like this: `nameOfArray[index]`.

``` javascript
const activities = ["Swimming", "Kayaking", "Snorkeling", "Parasailing"]
// => undefined

activities[0]
// => 'Swimming'

activities[2];
// => 'Snorkeling'
```

We can also use bracket notation `[]` — along with the assignment operator `=` — to update the value of an element in the array.

``` javascript
const foods = ["Pizza", "Taco", "Ramen"]
//=> undefined

foods[1] = "Hamburger"
//=> 'Hamburger'

foods
//=> ['Pizza', 'Hamburger', 'Ramen']
```

## Objects
Like `Array`s, JavaScript `Object`s are collections of data. They consist of a list of *properties* (*key-value pairs*) bounded by curly braces `{ }`. The properties can point to values of any data type — even other `Objects`.

We can have empty `Object`s:

``` javascript
const obj = {}
```

Or `Object`s with a single property:

``` javascript
const person = {
    name: "Alice"
}
```

When we have to represent multiple properties in the same `Object`, we use commas to separate them:

``` javascript
const person2 = {
    name: "Bob",
    age: 23
}
```

We can also have nested `Object`s, in which the values associated with one or more of the keys is another `Object`:

``` javascript
const food = {
    name: "Pizza",
    price: 7.99,
    restaurant: {
        name: "Gino's Pizzeria",
        location: "Queens, New York"
    }
}
```

We access an `Object` stored in a variable in the same way we access any variable's value: by typing the variable name. Then, to access one of the values *inside* our `Object`, we add a reference to the key associated with the value we want; we can do that using either *dot notation* or *bracket notation*.

With *dot notation*, we use the *member access operator* (a single period) to access values in an `Object`. For example, we can grab the individual pieces of our food, above, as follows:

``` javascript
food.name
//=> 'Pizza'

food.price
//=> 7.99

food.restaurant
//=> { name: "Gino's Pizzeria", location: 'Queens, New York' }
```

Then to access a value inside `food.restaurant`, we simply append the inner key, again using dot notation:

``` javascript
food.restaurant.name
//=> "Gino's Pizzeria"

food.restaurant.location
//=> 'Queens, New York'
```

With *bracket notation*, we use the *computed member access operator*, which is a pair of square brackets `[]`. To access the same properties as above, we need to represent them as strings inside the operator:

``` javascript
food["name"]
//=> 'Pizza'

food["price"]
//=> 7.99

food["restaurant"]
//=> { name: "Gino's Pizzeria", location: 'Queens, New York' }

food["restaurant"]["name"]
//=> "Gino's Pizzeria"
```
