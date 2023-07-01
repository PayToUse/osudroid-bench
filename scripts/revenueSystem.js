function addRevenue() {
  var revenueDisplay = document.getElementById('revenue');

  var savedRevenueValue = localStorage.getItem('savedRevenueValue') || 0;

  var currentRevenueValue = parseInt(savedRevenueValue);

  var newRevenueValue = currentRevenueValue + 1;

  revenueDisplay.innerHTML = newRevenueValue;

  localStorage.setItem('savedRevenueValue', newRevenueValue);
}
