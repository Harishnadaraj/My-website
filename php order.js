const form = document.getElementById('orderForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const customerName = document.querySelector('input[name="customer_name"]').value;
  const customerEmail = document.querySelector('input[name="customer_email"]').value;

  // Save order details to local storage
  localStorage.setItem('orderDetails', JSON.stringify({
    customerName: customerName,
    customerEmail: customerEmail
  }));

  // Display success message
  successMessage.classList.remove('hidden');
  form.classList.add('hidden');

  // You can also add a delay before showing the success message:
  // setTimeout(() => {
  //   successMessage.classList.remove('hidden');
  //   form.classList.add('hidden');
  // }, 2000); // 2 seconds delay
});