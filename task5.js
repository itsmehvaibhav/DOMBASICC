//Creating Nodes and Modifying Dom
const itemsList = document.querySelector("#items"); // select the items list element
const item1 = itemsList.firstElementChild; // get the first item in the list
const hellosTextNode = document.createTextNode("Hello "); // create a text node with the text "Hello"
itemsList.insertBefore(hellosTextNode, item1); // insert the text node before the first item in the list

const headerTitle = document.querySelector("#header-title"); // select the header title element
const parent = headerTitle.parentElement; // get the parent element of the header title
const helloTextNode = document.createTextNode("Hello "); // create a text node with the text "Hello"
parent.insertBefore(helloTextNode, headerTitle); // insert the text node before the header title