# Lecture # 6 - Communicating With The Server

## Lecture Topics
- Explain the differences between a server and a client
- Describe the request-response cycle
- Explain what asynchronous means in JavaScript
    - Observe how to handle promises using `.then()`
- Observe how `json-server` is used to create a local API
    - Name the different HTTP Verbs and describe their actions
    - Observe how to render data to the browser window after a request made with `fetch()`
    - Observe how to send a `GET` request using fetch()

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

We will be using the `fetch()` function to make a `GET` request to a backend server containing data for our food. After obtaining the food data from the backend server, we will be adding the food images to the menu, using that food data. We will also be displaying the information for one of the menu items including the name, image, and description for the menu item within a food detail section of the page when the image for the menu item is clicked within the menu. We will be using the concepts learned in this lecture to build out this app.

1. Use the `fetch()` function to make a `GET` request to [http://localhost:3000/foods](http://localhost:3000/foods) to retrieve the food data from the server.

2. Once you have retrieved the food data from the server, use the `.forEach()` array iterator method to iterate through the array of foods. For each of the foods:
    - Create an `img` element using `document.createElement()`.
    - Set the `src` attribute of the `img` element to contain the image of the food.
    - Use `.appendChild()` to append the `img` element to the DOM element with the id of `restaurant-menu`.

3. Refactor your code from Deliverable # 2 into a function named `addFoodImageToRestaurantMenu()`.

4. Display the details for the first food from the array of foods retrieved from the server. The food details should display immediately when the page loads. To build out this feature, make sure to do the following:
    - Search for the DOM element with the class of `detail-image`. Set the `src` attribute of this `img` element to contain the image of the first food from the array of foods retrieved from the server.
    - Search for the DOM element with the class of `name`. Set the `textContent` attribute of this DOM element to have the value of the name of the first food from the array of foods retrieved from the server.
    - Search for the DOM element with the id of `description-display`. Set the `textContent` attribute of this DOM element to have the value of the description of the first food from the array of foods retrieved from the server.

5. Refactor your code from Deliverable # 4 into a function named `displayFoodDetails()`.

6. Adding to the code from Deliverable # 3 inside of the `addFoodImageToRestaurantMenu()` function - add a `click` event listener to each of the `img` elements in the `div#restaurant-menu` element that displays the details (name, image, and description) for a specific food, depending on which `img` element is clicked. You can invoke the `displayFoodDetails()` function, passing in the appropriate value as an argument, to display the correct food information in response to clicking on an `img` element from the `div#restaurant-menu` element.

## The Web
![request_response](assets/request_response.png)

What happens when you type a URL into the browser? 
Your browser makes a request to a server, that server sends some response, and your browser parses and process that data.

Think about when you log into a website like Pinterest or Instagram. You are given an interface full of data curated and unique to you. Have you ever wondered why what when you log in is different from what your friends/family see when they log in? This is because clients can be treated like a template populated with data. 

When you log in, the client will return with the basic template of the web page and make requests for data specific to each user. 

In JavaScript, we can achieve this through HTTP requests.

## HTTP
"The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web and is used to load web pages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message."
[ Cloudflare, "What is HTTP?" 2022](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)

In other words, HTTP is the language used by the client(browser). The server is used to communicate and exchange responses, including data.

### The Request 
A request has HTTP methods (also known as HTTP verbs)  defining the kind of request, the address of the request, and sometimes data or headers.

HTTP Methods

GET: requests resources and retrieves data (READ)

POST: sends data to the server (CREATE)

PATCH: Updates part of a resource (UPDATE)

DELETE: Deletes a resource (DELETE)

### Fetch & Promise
fetch() is a function that allows us to create an HTTP request to Read, CREATE, UPDATE or DELETE resources.
It returns a promise.

.then() is a method called on a promise and returns a promise.

``` javascript
// When given a URL, fetch() creates an HTTP GET request to the server the URL points to. It returns a promise.
// Once the promise has been fulfilled the response from the server is passed to the .then() 
fetch(url)
.then()

// The .then() takes a callback
// Within that callback we can parse the response by calling .json() on it. 
// .json() also returns a promise so we can chain a .then() onto our original .then() that will process the data once the promise from the .json() is fulfilled. 

fetch(url)
.then(response => {
    // retrieves the data from our response
    return response.json()
})
.then(data => console.log(data))

```
