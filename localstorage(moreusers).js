const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Check if there is existing data in local storage
let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Create an object with the form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  
  // Add the form data object to the array
  formDataArray.push(formData);
  
  // Convert the array to a JSON string and store it in local storage
  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
  
  // Display a message to the user
  alert('Form data saved!');
  
  // Reset the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

// Display the stored form data in a list
formDataArray.forEach((formData) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `${formData.name} (${formData.email}): ${formData.message}`;
  document.querySelector('#formDataList').appendChild(listItem);
});
