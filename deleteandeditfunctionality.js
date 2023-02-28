var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete and Edit event
itemList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    removeItem(e);
  } else if (e.target.classList.contains('edit')) {
    editItem(e);
  }
});
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-info btn-sm float-right edit mr-2';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (confirm('Are You Sure?')) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

// Edit item
function editItem(e) {
  var li = e.target.parentElement;
  var itemText = li.firstChild.textContent;

  // Create edit input
  var editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'form-control mr-2 edit-item';
  editInput.value = itemText;

  // Replace text node with edit input
  li.replaceChild(editInput, li.firstChild);

  // Change edit button text
  e.target.textContent = 'Save';
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
