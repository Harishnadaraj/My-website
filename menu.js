const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const beverages = Array.from(document.querySelectorAll('input[name="beverage"]:checked'))
        .map(checkbox => checkbox.value);
    const food = Array.from(document.querySelectorAll('input[name="food"]:checked'))
        .map(checkbox => checkbox.value);

    // Send the order data to your backend (e.g., using AJAX)
    console.log('Order placed:', { beverages, food });
});