const restaurantMenu = document.getElementById('restaurant-menu')

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                imgElement.remove()
            }
            else{
                alert(`Error: Unable to delete Food # ${currentlyDisplayedFood.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    currentlyDisplayedFood = food
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

// write your code here