const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the form data
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Store the form data in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);
  
  // Display a message to the user
  alert('Form data saved!');
});
