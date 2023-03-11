// get a reference to the list element
var list = document.getElementById("itemList");
		
function addItem() {
    // get the value of the new item input
    var newItem = document.getElementById("newItem").value;
    
    // create a new list item element
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newItem));
    
    // add edit and delete buttons
    var editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    editBtn.onclick = function() { editItem(editBtn.parentNode); };
    li.appendChild(editBtn);
    
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.onclick = function() { deleteItem(deleteBtn.parentNode); };
    li.appendChild(deleteBtn);
    
    // add the new item to the list
    list.appendChild(li);
    
    // clear the new item input
    document.getElementById("newItem").value = "";
}

function editItem(item) {
    // get the current item text
    var currentItemText = item.firstChild.nodeValue;
    
    // prompt the user to enter a new item text
    var newItemText = prompt("Enter new item text:", currentItemText);
    
    // if the user clicked cancel or entered an empty string, do nothing
    if (newItemText === null || newItemText === "") {
        return;
    }
    
    // update the item text
    item.firstChild.nodeValue = newItemText;
}

function deleteItem(item) {
    // remove the item from the list
    list.removeChild(item);
}