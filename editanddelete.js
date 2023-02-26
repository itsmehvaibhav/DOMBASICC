var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value and description
  li.appendChild(document.createTextNode(newItem + ' - '));
  var span = document.createElement('span');
  span.appendChild(document.createTextNode(newDescription));
  li.appendChild(span);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields
  document.getElementById('item').value = '';
  document.getElementById('description').value = '';
}