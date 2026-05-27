function budget(){
    let firstInput = document.querySelector('.firstInput');
    let inputValue = firstInput.value;
    let budgetValue = document.getElementById('budgetValue');
    budgetValue.textContent = inputValue;
}

function expenses(){
    let secondInput = document.getElementById('secondInput');
    let secondInputValue = secondInput.value;
    let expensesValue = document.getElementById('expensesValue');
    expensesValue.textContent = secondInputValue;
}

function balance(){
    budget();
    expenses();

    let budgetNumber = parseFloat(document.getElementById('budgetValue').textContent);
    let expensesNumber = parseFloat(document.getElementById('expensesValue').textContent);
    let balance = document.getElementById('balanceValue');
    balance.textContent = budgetNumber - expensesNumber;
}
