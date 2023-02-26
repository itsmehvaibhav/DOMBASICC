const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const formDataList = document.querySelector('#formDataList');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve the existing form data from local storage, or initialize an empty array if it doesn't exist
  let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

  // Create an object with the new form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Add the new form data to the array of existing form data
  formDataArray.push(formData);

  // Store the updated array of form data in local storage
  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

  // Display a message to the user
  alert('Form data saved!');

  // Update the list of form data on the page
  updateFormDataList(formDataArray);
});

function updateFormDataList(formDataArray) {
  // Clear the existing list items
  formDataList.innerHTML = '';

  // Loop through the array of form data and create a new list item for each object
  formDataArray.forEach((formData, index) => {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    li.textContent = `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`;
    deleteButton.textContent = 'Delete';
    editButton.textContent = 'Edit';

    deleteButton.addEventListener('click', () => {
      // Remove the corresponding object from the array of form data
      formDataArray.splice(index, 1);

      // Store the updated array of form data in local storage
      localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

      // Update the list of form data on the page
      updateFormDataList(formDataArray);
    });

    editButton.addEventListener('click', () => {
      // Populate the form with the existing form data
      nameInput.value = formData.name;
      emailInput.value = formData.email;
      messageInput.value = formData.message;

      // Remove the corresponding object from the array of form data
      formDataArray.splice(index, 1);

      // Store the updated array of form data in local storage
      localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

      // Update the list of form data on the page
      updateFormDataList(formDataArray);
    });

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    formDataList.appendChild(li);
  });
}

// Call the updateFormDataList function when the page loads to display any existing form data
updateFormDataList(JSON.parse(localStorage.getItem('formDataArray')) || []);
