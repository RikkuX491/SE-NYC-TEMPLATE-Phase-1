const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                imgElement.remove()
            }
            else{
                alert(`Error: Unable to delete Food # ${food.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    foodDetailImageElement.src = food.image
    foodNameElement.textContent = food.name
    foodDescriptionDisplayElement.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

// write your code here