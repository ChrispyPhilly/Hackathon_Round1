const search = document.querySelector('#searchButton')
const input = document.querySelector('#textInput')
const itemContainer = document.querySelector('.item-container')
const BASE_URL = 'http://localhost:3001/'
const TYPES_URL = 'http://localhost:3001/types'

let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${button.parentElement.dataset.name} added to cart!`);
    });
});

const getTypes = async (type) => {
    try {
        let response = await axios.get(`${TYPES_URL}/search?type=${type}`);
        if (response) {
            let typesData = await response.data;

            itemContainer.innerHTML = '';

            if (typesData.length === 0) {
                itemContainer.innerHTML = '<p>No types found. Please try a different search.</p>';
                return;
            } else {
            for (let i = 0; i < typesData.length; i++) {
                 const typeDiv = document.createElement('div');
                typeDiv.classList.add('type')

                typeDiv.innerHTML = `
                    <h3>${typesData[i].type}</h3>
                    <p>${typesData[i].description}</p>
                    <button class="add-to-cart">Add to Cart</button>
                `;

                itemContainer.appendChild(typeDiv);
            }
               
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
};






search.addEventListener('click', () => {
    getTypes(input.value);
})

document.addEventListener("DOMContentLoaded", () => {
    const typeButton = document.querySelectorAll('.horizontal-list')
    typeButton.forEach(button => {
        button.addEventListener('click', (event) => {
            const bran = event.target.textContent.toLowerCase()
            getBrand(brandName)
        })
    })


search.keyup(function(event) {
    if (event.keyCode == 13) {
        search.click()
    }

})