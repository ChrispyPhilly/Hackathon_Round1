const search = document.querySelector('#searchButton')
const input = document.querySelector('#textInput')
const itemContainer = document.querySelector('.item-container')
const productContainer = document.querySelector('.product-container')
const ITEMS_URL = 'http://localhost:3001/items'
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
                `;

                itemContainer.appendChild(typeDiv);
            }
               
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
const getItems = async () => {
    try {
        let response = await axios.get(`${ITEMS_URL}`);
        if (response) {
            let itemsData = await response.data;

            productContainer.innerHTML = '';

            if (itemsData.length === 0) {
                productContainer.innerHTML = '<p>No items found. Please try again later.</p>';
                return;
            } else {
                for (let i = 0; i < itemsData.length; i++) {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('item');
                    itemDiv.innerHTML = `
                        <h3>${itemsData[i].name}</h3>
                        <p>Price: $${itemsData[i].priceUSD}</p>
                        <p>Material: ${itemsData[i].material}</p>
                        <p>Stock: ${itemsData[i].stock}</p>
                        <button class="add-to-cart" data-name="${itemsData[i].name}">Add to Cart</button>
                    `;

                    productContainer.appendChild(itemDiv);
                }
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
};





// search.addEventListener('click', () => {
//     getItems(input.value);
// })

document.addEventListener("DOMContentLoaded", () => {
    getItems()
    const typeButton = document.querySelectorAll('.horizontal-list')
    typeButton.forEach(button => {
        button.addEventListener('click', (event) => {
            const types = event.target.textContent.toLowerCase()
            getTypes(types)
        })
    })
})

// search.keyup(function(event) {
//     if (event.keyCode == 13) {
//         search.click()
//     }
// })