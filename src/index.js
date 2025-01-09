const restaurantMenuElement = document.getElementById('restaurant-menu')
const detailImageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const descriptionDisplayElement = document.getElementById('description-display')

// Deliverable # 1 solution code goes here
function displayFoodDetails(food){
    detailImageElement.src = food.image
    nameElement.textContent = food.name
    descriptionDisplayElement.textContent = food.description
}

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        // Deliverable # 3 solution code goes here
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
    // Deliverable # 2 solution code goes here

    foods.forEach(addFoodImageToRestaurantMenu)
})