const expenseForm = document.querySelector('#expense-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');
const expenseList = document.querySelector('#expense-list');

// Retrieve existing expenses from local storage, or initialize an empty array if it doesn't exist
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Add a new expense
expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const expense = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
    expenseForm.reset();
});

// Display the list of expenses
function displayExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${expense.amount} - ${expense.description} - ${expense.category}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            displayExpenses();
        });
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            amountInput.value = expense.amount;
            descriptionInput.value = expense.description;
            categoryInput.value = expense.category;
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            displayExpenses();
        });
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        expenseList.appendChild(li);
    });
}

// Call the displayExpenses function on page load
displayExpenses();
