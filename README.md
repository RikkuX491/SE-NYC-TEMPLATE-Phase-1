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

1. Use the `fetch()` method to make a `GET` request to [https://api.coincap.io/v2/assets](https://api.coincap.io/v2/assets) to retrieve the data from the External API.

2. Once you have retrieved the data from the External API, you will notice that the data is an `object` that contains two keys, `data` and `timestamp`. Access the value of the `data` key to get the cryptocurrency data. For example, if the API data is stored in a parameter named `apiData`, then `apiData.data` will allow you to access the value of the `data` key, which is the cryptocurrency data.

3. The cryptocurrency data consists of an array such that each element of the array is an `object`. Use the `filter()` array iterator method to return a new array containing the filtered cryptocurrency `object`s whose rank is less than or equal to `10`. Store the filtered array into a variable named `filteredCryptocurrencies`.

Hint: You will need to convert the value of the `rank` for the cryptocurrency `object`s to a `number` before checking whether the `rank` is less than or equal to `10`.

4. Use the `forEach()` array iterator method to iterate through the array stored in the `filteredCryptocurrencies` variable. For each cryptocurrency `object`:
   - Create an `<li>` element.
   - Set the `textContent` attribute for the `<li>` element to contain data in the following format: `[name] ([symbol]): Rank # [rank]` - where `[name]` should be replaced with the name of the cryptocurrency, `[symbol]` should be replaced with the symbol of the cryptocurrency, and `[rank]` should be replaced with the rank of the cryptocurrency. These values can be found within the cryptocurrency `object` that contains `name`, `symbol`, and `rank` keys.
   - Use the `appendChild()` method to append the `<li>` element inside of the `<ul>` element with the id of `cryptocurrency-list`.