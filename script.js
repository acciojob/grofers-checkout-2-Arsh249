//your code here
function calculateTotalPrice() {
  // Get all the price elements from the table
  const prices = document.querySelectorAll('[data-ns-test="price"]');

  // Calculate the total sum of the prices
  let total = 0;
  prices.forEach(priceElement => {
    total += parseFloat(priceElement.textContent);
  });

  // Create a new row to display the total
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');

  // Set the attributes and content for the total cell
  totalCell.setAttribute('colspan', '2'); // Span across two columns
  totalCell.setAttribute('data-ns-test', 'grandTotal');
  totalCell.textContent = `Total: $${total.toFixed(2)}`;

  // Append the total cell to the new row
  totalRow.appendChild(totalCell);

  // Append the new row to the table
  document.getElementById('grocery-list').appendChild(totalRow);
}

// Call the function to calculate and display the total price
calculateTotalPrice();
