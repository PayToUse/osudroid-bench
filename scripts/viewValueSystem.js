function addView() {
  var viewDisplay = document.getElementById('views');

  var savedViewsValue = localStorage.getItem('savedViewsValue') || 0;

  var currentViewsValue = parseInt(savedViewsValue);

  var newViewsValue = currentViewsValue + 1;

  viewDisplay.innerHTML = newViewsValue;

  localStorage.setItem('savedViewsValue', newViewsValue);
}
