var button = document.querySelector('.form_button');
var itemList = document.querySelector('.u_list');

// Form Submit Event
button.addEventListener('click', addItem);

// Delete Event - Delete Item
itemList.addEventListener('click', removeItem);

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
  console.log();
}

//Remove Item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if(confirm('Are you absolutely certain?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}