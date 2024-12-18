# Lecture # 10 - Algorithmic Problem Solving

## Lecture Topics

- Define "algorithm"
- Outline the steps for solving problems using algorithms
- Define Big O notation
- Calculate time and space complexity using Big O notation
- Identify common Big O runtimes: constant, linear, quadratic and logarithmic
- Research the Big O runtime of built-in methods

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

1. Create a function named `reverseFoodName()` that has one parameter named `foodName`. The function should reverse the string stored in the `foodName` parameter such that the string's letters are in reverse order. The function should return the reversed string.

```txt
Input: "Flatburger"
Return Value: "regrubtalF"
```

```javascript
reverseFoodName("Taco")
// ocaT
```

**Do not call any type of built-in reverse method!**

Please solve the problem using iteration.

2. Use the `addEventListener()` method to allow the `<button>` element with the id of `reverse-button` to listen for a `click` event. In response to the `click` event, the following actions should take place:

   - Search for the DOM element (`<h2>`) with the class of `name`.

   - The `reverseFoodName()` function is called, and the `textContent` attribute of the `<h2>` element with the class of `name` is passed in as an argument to the `reverseFoodName()` function.

   - The DOM is updated and displays the reversed food name. To do this, the `textContent` attribute of the `<h2>` element with the class of `name` should be set to the return value of the `reverseFoodName()` function.

## Algorithms

An **algorithm** is a well-defined procedure, or set of instructions, for accomplishing a specific task. We write **algorithms** to solve problems.

In the real world, we utilize algorithms all the time. If you had to describe how you wash your hair, you would likely outline the following instructions:

```txt
lather
rinse
repeat
```

Some other real-world algorithms that you might use all the time are recipes. For instance, if you want to make some delicious chocolate chip cookies, you'd want to complete the following steps:

```txt
1. Preheat the oven to 350 F.
2. Microwave the butter for about 40 seconds. Butter should be completely melted
   but shouldn't be hot.
3. In a large bowl, mix butter with the sugars until well-combined.
4. Stir in vanilla and egg until incorporated.
5. Add the flour, baking soda, and salt.
6. Mix dough until just combined. Dough should be soft and a little sticky but
   not overly sticky.
7. Stir in chocolate chips.
8. Scoop out 1.5 tablespoons of dough and place on baking sheet.
9. Bake for 7-10 minutes, or until cookies are set. They will be puffy and still
   look a little under baked in the middle.
```

Any set of instructions or procedure describing how to complete a task could also be categorized as an algorithm. If you're wondering if that's any different from the work you've already been doing when working on labs, we've got good news: It's not! You've already had plenty of practice writing your own algorithms to solve problems based on specific sets of instructions. Algorithic Problem Solving is the idea of focusing deliberately on _how_ to solve problems and developing a process for writing your own algorithms.

## How to Solve Problems

When given any problem to solve with code, two mistakes many programmers make are to jump into code too fast or to start thinking about code optimization too early. Both of these mistakes can greatly increase the amount of time it takes to solve a problem and increase frustration.

In general, any time you write code, your priorities are to:

- Make it work
- Make it right (i.e., readable)
- Make it fast

Here are the steps we recommend taking:

1. Rewrite the Problem in Your Own Words

2. Write Your Own Test Cases

3. Pseudocode

4. Code

5. Make It Clean and Readable

6. Optimize

## Big O Notation

**Big O notation** is used to classify algorithms according to how their run **time** or **space** requirements grow as the input size grows.

What does that mean? We'll use a real-world example. Imagine you're looking for a sock in a pile of unfolded laundry. An algorithm for finding the sock might look like this:

```txt
take one item from the pile
check if it's the sock we're looking for
if it is
  put on the sock
otherwise, keep looking
```

How much time will it take us to find the sock? Well, that depends on a couple factors.

One factor to consider is how quickly we're able to pull out socks from the pile and check what they look like. That variable changes from person to person, so it's not a factor of our _algorithm's_ efficiency, and not something we can account for in Big O notation.

The other factor to consider is the size of our input, or in this case, how big is the pile of laundry? If it's just one item, we'll find the sock right away! If it's 1000 items, the **worst case** scenario is that the sock we're looking for is the last one we'll pull out of the pile. So, for our sock finding algorithm, **as the size of the input increases, the time requirement increases linearly** (the bigger the pile, the longer it takes).

Let's translate this analogy to code:

```js
function findSock(laundry) {
  for (const item of laundry) {
    if (item === "sock") return item;
  }
}

findSock(["shirt", "shorts", "sock", "pants"]);
```

Let's think about the time complexity of this algorithm (how long it will take to run) step by step:

- The `for...of` block will iterate over every element in the `laundry` array.
- On the first iteration, the first element, `"shirt"` is assigned to the
  variable `item`.
- The `if` statement checks: is the `item` a `"sock"`? Nope! We continue
  iterating.
- On the second iteration, the second element, `"shorts"` is assigned to the
  variable `item`.
- The `if` statement checks: is the `item` a `"sock"`? Nope! We continue
  iterating.
- On the third iteration, the third element, `"sock"` is assigned to the
  variable `item`.
- The `if` statement checks: is the `item` a `"sock"`? Yep! We stop iterating
  and return from the function.

What happens if our sock is the last element of the array? Or what if the sock isn't in the array at all?

If `laundry` is an unsorted array of strings, the **worst case** scenario for our algorithm is that it will have to iterate over every item in the array. In regards to Big O, whether it might find the element on the first try, or on the third try, or sometimes not at all is not important; developers simply care about describing the algorithm from the highest, most abstract level.

Besides the size of the input, the other factor that will determine how long our algorithm will take to find a sock is how powerful the computer is that is running our code. Once again, that variable changes from computer to computer, so it's not a factor of our algorithm's efficiency.

Therefore, we can summarize the time complexity of our function like this:

**Given an input array of `n` elements, the worst case scenario is that the algorithm needs to make `n` iterations.**

In Big O notation, we can express this as `O(n)`, which is also known as **linear time**.

## Identifying Time Complexity With Big O

When calculating the time complexity of an algorithm using Big O notation, we're looking for a high-level summary of the algorithm's performance. Let's look at another example of an algorithm. This one calculates the average of an array of numbers:

```js
function average(array) {
  let total = 0;
  for (const num of array) {
    total += num;
  }
  return total / array.length;
}
```

To determine the time complexity of any algorithm, all we need to do is:

- Count the number of steps the computer will take to run our code
- Remove any constants (more on this shortly!)

Let's start by counting the steps:

```js
function average(array) {
  // 1 step
  let total = 0;

  for (const num of array) {
    // n steps (dependent on the size of the array)
    total += num;
  }

  // 1 step
  return total / array.length;
}
```

This gives us a runtime of `O(n + 2)`. We can remove the constants (`+ 2`) because we're just looking for a high-level summary, so we end up with `O(n)`.

What if we use the `reduce` method instead of a `for...of` loop?

```js
function average(array) {
  return array.reduce((total, num) => total + num, 0) / array.length;
}
```

Under the hood, the `reduce` method still needs to iterate over every element in the array, so we still end up with the same runtime: `O(n)`. It's important to keep this in mind for built-in methods: just because we might end up with fewer lines of code doesn't mean our runtime improves.

Let's try another example. Here's another algorithm for determining if an array contains the average of all its values:

```js
function containsAverage(array) {
  const averageValue = average(array);
  for (const num of array) {
    if (num === averageValue) return true;
  }
}
```

Let's count the steps once more:

```js
function containsAverage(array) {
  // n steps (depending on the size of the array)
  const averageValue = average(array);

  for (const num of array) {
    // n steps (depending on the size of the array)
    if (num === averageValue) return true;
  }
}
```

Counting the steps here, we end up with `O(n * 2)`. Even though it takes twice as long as our first algorithm, we can still remove the constants and end up with `O(n)`. Since we're looking for a high-level summary, this approximation still gives us a good sense as to how well our algorithm will scale to larger and larger inputs when compared to some other common Big O runtimes.

These are four of the most common Big O formulas, along with examples:

| Big O    | Name        | Example                                     |
| -------- | ----------- | ------------------------------------------- |
| O(1)     | Constant    | Accessing a value in an object by its key   |
| O(log n) | Logarithmic | Binary search                               |
| O(n)     | Linear      | Iterating through every element in an array |
| O(n²)    | Quadratic   | Nested iteration                            |

## Space Complexity With Big O

We've spent some time discussing how to calculate time complexity (how long our function will take to run) using Big O notation, but there's another consideration: space complexity (how much memory our function will use).

Just like with time complexity, we measure space complexity _relative to the size of the input_: for an input that takes up `n` memory, how much memory will our algorithm use? In addition to the amount of memory needed for our inputs, we need to consider what auxiliary (additional) space is taken up for new data structures when our algorithm runs.

Let's break down a couple algorithms to see some examples:

```js
function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}
```

In this case, we need to allocate memory for the input `word`, as well as these auxiliary pieces of data:

- an array `wordArray` that will grow in size linearly with the input
- an array `reversedWordArray` that will grow in size linearly with the input
- a string `reversedWord` that will grow in size linearly with the input

Putting that together, we end up with `O(4n)` space complexity: for an input string of length `n`, we also need to declare two arrays of length `n` and another string of length `n`. We can simplify as `O(n)` after dropping the constant.

In general, space complexity can be a bit more difficult to calculate than time complexity because it can vary between different programming languages and environments, depending on how they allocate memory under the hood; so again, keeping a high-level summary is more important than trying to be too precise.

For a function that simply adds two numbers together:

```js
function sum(num1, num2) {
  return num1 + num2;
}
```

We only allocate memory for the inputs and the return value:

- A number `num1`
- A number `num2`
- A number (the return value)

In this case, we can summarize the space complexity as constant: `O(1)`.

In many cases, you can improve an algorithm's space complexity by sacrificing its time complexity, and vice-versa; navigating these tradeoffs is one of the keys to being a good developer, and it comes with practice.

## Big O of Built-In Methods

One major factor to consider when determining the runtime complexity of an algorithm is **how well a language's built-in methods perform**. For example, looking up a key on an object is a O(1) operation.

When we make assertions like this, we're summarizing some of the lower-level work that JavaScript is doing under the hood when it comes to certain common operations, like looking up a key on an object.

Here is a general summary of common runtimes for operations involving objects:

| Method                                           | Big O |
| ------------------------------------------------ | ----- |
| Access (looking for a value with a known key)    | O(1)  |
| Search (looking for a value without a known key) | O(n)  |
| Insertion (adding a value at a known key)        | O(1)  |
| Deletion (removing a value at a known key)       | O(1)  |

Arrays also have certain runtime costs for common operations, which we can summarize as follows:

| Method                                    | Big O |
| ----------------------------------------- | ----- |
| Access                                    | O(1)  |
| Search (`.indexOf()`)                     | O(n)  |
| Insertion: End (`.push()`)                | O(1)  |
| Insertion: Beginning (`.unshift()`)       | O(n)  |
| Deletion: End (`.pop()`)                  | O(1)  |
| Deletion: Beginning (`.shift()`)          | O(n)  |
| Creation from existing array (`.slice()`) | O(n)  |