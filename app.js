function budget(){
    var firstInput = document.getElementById('firstInput');
    var inputValue = firstInput.value;
    var budgetValue = document.getElementById('budgetValue');
    budgetValue.textContent = inputValue;
}

function expenses(){
    var secondInput = document.getElementById('secondInput');
    var secondInputValue = secondInput.value;
    var expensesValue = document.getElementById('expensesValue');
    expensesValue.textContent = secondInputValue;
}
