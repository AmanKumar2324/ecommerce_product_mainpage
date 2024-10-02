// Get the cart icon and dropdown
const cartIcon = document.querySelector('.cart_icon');
const cartDropdown = document.getElementById('cartDropdown');

// Add event listener to the cart icon
cartIcon.addEventListener('click', () => {
    // Toggle the visibility of the dropdown
    if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
        cartDropdown.style.display = 'block';
    } else {
        cartDropdown.style.display = 'none';
    }
});

// Close the cart dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
        cartDropdown.style.display = 'none';
    }
});
