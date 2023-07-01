function addValues() {
  const r = setTimeout(addRevenue, 0);
  const v = setTimeout(addView, 0);
}

function addRevenue() {
  var revenueDisplay = document.getElementById('revenue');

  var savedRevenueValue = localStorage.getItem('savedRevenueValue') || 0;

  var currentRevenueValue = parseInt(savedRevenueValue);

  var newRevenueValue = currentRevenueValue + 1;

  revenueDisplay.innerHTML = newRevenueValue;

  localStorage.setItem('savedRevenueValue', newRevenueValue);
}

function addView() {
  var viewDisplay = document.getElementById('views');

  var savedViewsValue = localStorage.getItem('savedViewsValue') || 0;

  var currentViewsValue = parseInt(savedViewsValue);

  var newViewsValue = currentViewsValue + 1;

  viewDisplay.innerHTML = newViewsValue;

  localStorage.setItem('savedViewsValue', newViewsValue);
}
