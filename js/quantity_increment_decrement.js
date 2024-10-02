document.addEventListener("DOMContentLoaded", function () {
    const itemQuantity = document.getElementById("item_quantity");
    const addButton = document.getElementById("add_sign");
    const removeButton = document.getElementById("remove_sign");

    let quantity = 1; // Default value

    // Update the quantity display
    const updateQuantityDisplay = function () {
        itemQuantity.textContent = quantity;
    };

    // Add event listener for the add button
    addButton.addEventListener("click", function () {
        quantity += 1; // Increment the quantity
        updateQuantityDisplay();
    });

    // Add event listener for the remove button
    removeButton.addEventListener("click", function () {
        if (quantity > 1) {
            quantity -= 1; // Decrement the quantity, if it's greater than 0
        }
        updateQuantityDisplay();
    });

    // Initialize display
    updateQuantityDisplay();
});
