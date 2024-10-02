const cartButton = document.getElementById('add_to_cart');
const cartProductList = document.getElementById('cartProductList');
const productQuantityElement = document.getElementById('productQuantity');
const totalPriceElement = document.querySelector('.total_price');
const itemQuantityElement = document.getElementById('item_quantity');

// Variables
const productPrice = 125; // Price per product

// Function to update cart details
function updateCart() {
  const itemQuantity = parseInt(itemQuantityElement.textContent);
  if (itemQuantity > 0) {
    // Showing product details functionality in the cart
    productQuantityElement.textContent = itemQuantity;
    totalPriceElement.textContent = `$${productPrice * itemQuantity}.00`;
    cartProductList.style.display = 'block';
  } else {
    // If no items are added, hide product list and show empty message
    cartProductList.style.display = 'none';
  }
}

// Event listener for the "Add to cart" button
cartButton.addEventListener('click', (event) => {
  updateCart();
  event.stopPropagation();
});

// Event listener to hide the cart when clicking outside
document.addEventListener('click', (event) => {
  // Functionality to hide the cart dropdown if the clicked element is outside the cart or the "Add to cart" button
  if (!cartProductList.contains(event.target) && !cartButton.contains(event.target)) {
    cartProductList.style.display = 'none';
  }
});
