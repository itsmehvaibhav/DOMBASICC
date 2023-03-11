const expenseForm = document.querySelector('#expense-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');
const userContainer = document.querySelector('#user-details');

// The API endpoint provided by crudcrud.com
const apiUrl = 'https://crudcrud.com/api/174097709d74483a85e205a4f257ac54/expenselist';

// Fetch user details and display them on the website
window.addEventListener('DOMContentLoaded', () => {
    axios.get(apiUrl)
        .then(response => {
            const users = response.data;
            const userHtml = users.map(user => `<div>${user.amount} - ${user.description} - ${user.category}</div>`).join('');
            userContainer.innerHTML = userHtml;
        })
        .catch(error => {
            console.log(error);
        });
});

// Add a new expense
expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const expense = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    };
    axios.post(apiUrl, expense)
        .then(response => {
            console.log(response.data);
            expenseForm.reset();
        })
        .catch(error => {
            console.log(error);
        });
});
