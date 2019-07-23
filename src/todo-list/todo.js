var button = document.querySelector('.form_button');
var itemList = document.querySelector('.u_list');

// Form Submit Event
button.addEventListener('click', addItem);

// Add Item
function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem = document.querySelector('.form_text').value;


  //Create New li Element
  var li = document.createElement('li');
  //Add Classname (if needed)

  //Add Text Node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  

}