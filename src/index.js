const restaurantMenuElement = document.getElementById('restaurant-menu')
const detailImageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const descriptionDisplayElement = document.getElementById('description-display')

function displayFoodDetails(food){
    detailImageElement.src = food.image
    nameElement.textContent = food.name
    descriptionDisplayElement.textContent = food.description
}

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        imgElement.remove()
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
    })

    restaurantMenuElement.appendChild(imgElement)
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})