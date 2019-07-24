var button = document.querySelector('.form_button');
var itemList = document.querySelector('.u_list');
var filter = document.querySelector('.searchbar');
var textInputArea = document.querySelector('form_text');

//Clear Placeholder on Focus
$('form_text').focus(function(){
  $(this).removeAttr('placeholder');
  console.log(1);
});

// Form Submit Event
button.addEventListener('click', addItem);

// Delete Event - Delete Item
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

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

  //Create Delete Button 
  var deleteBtn = document.createElement('button');

  //Add Delete Btn Classses
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Append Text Node
  deleteBtn.appendChild(document.createTextNode('X'));

  //Append Button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);

  //Clear TextBox
  document.querySelector('.form_text').value = ""; 
}

//Remove Item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if(confirm('Confirm Delete?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get <li>s
  var items = itemList.getElementsByTagName('li')
  //Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
     } else {
      item.style.display = 'none';
     }
  });
}