//QUERYSELECTORALL
 //select all the odd-numbered list items in the #items list
var oddItems = document.querySelectorAll("#items li:nth-child(odd)");

 //set the background color of each odd item to green
for (var i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = "green";
}
