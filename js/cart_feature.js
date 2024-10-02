// Geting the cart icon and dropdown
const cartIcon = document.querySelector('.cart_icon');
const cartDropdown = document.getElementById('cartDropdown');

// Adding event listener to the cart icon
cartIcon.addEventListener('click', () => {
  if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
    cartDropdown.style.display = 'block';
  } else {
    cartDropdown.style.display = 'none';
  }
});

// Close functionality of the cart dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
    cartDropdown.style.display = 'none';
  }
});
