document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your order has been submitted successfully!');
    // Reset the form
    event.target.reset();
});
