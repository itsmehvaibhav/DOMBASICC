const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Create an object with the form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  
  // Convert the object to a JSON string and store it in local storage
  localStorage.setItem('formData', JSON.stringify(formData));
  
  // Display a message to the user
  alert('Form data saved!');
});
