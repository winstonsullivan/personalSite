let menu = {
    burger: 6.25, 
    fries: 3.21, 
    shake: 3.73,
    salad: 6.18,
  };
  
  let totalSum = 0; // Initialize a variable to keep track of the total sum
  
  function updateOrder(item) {
    if (menu.hasOwnProperty(item)) {
      totalSum += menu[item]; // Add the price of the item to the total sum
      document.getElementById('total').textContent = totalSum.toFixed(2); // Update the displayed total
      document.getElementById('errors').textContent = ''; // Clear any previous error messages
    } else {
      document.getElementById('errors').textContent = 'Error: The item "' + item + '" is not on the menu.';
    }
  }
  
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
      let orderedItem = this.getAttribute('data-item');
      updateOrder(orderedItem);
    });
  });
  