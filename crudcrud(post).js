const expenseForm = document.querySelector('#expense-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');

// The API endpoint provided by crudcrud.com
const apiUrl = 'https://crudcrud.com/api/31d375f236ab42da9cc342a49e4b0bbe/expenselist';

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
