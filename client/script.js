const search = document.querySelector('#searchButton')
const input = document.querySelector('#textInput')
productName = document.querySelector('.product')
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
        let response = await fetch(`${TYPES_URL}/search?type=${type}`)
        if (response) {
            let typesData = await response.json()
            console.log(typesData)
        } 
    } catch (error) {
        console.error("Error:", error)
    }
};




search.addEventListener('click', () => {
    getTypes(input.value);
})