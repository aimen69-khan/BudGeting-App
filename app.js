function budget(){
    let firstInput = document.querySelector('.firstInput');
    let inputValue = firstInput.value;
    let budgetValue = document.getElementById('budgetValue');
    if(inputValue === ''){
        alert('" NO VALUE FOUND "');
    }else{
        budgetValue.textContent = inputValue;
    }
}

function expenses(){
    let secondInput = document.getElementById('secondInput');
    let secondInputValue = secondInput.value;
    let expensesValue = document.querySelector('.expensesValue');
    expensesValue.textContent = secondInputValue;
}

function balance(){
    budget();
    expenses();
    let budgetNumber = parseFloat(document.getElementById('budgetValue').textContent);
    let expensesNumber = parseFloat(document.querySelector('.expensesValue').textContent);
    let balance = document.getElementById('balanceValue');
    balance.textContent = budgetNumber - expensesNumber;
}

function titleProduct(){
    let title = document.getElementById('inputTitle');
    let inputTitle = title.value.trim();
    let secondInput = document.getElementById('secondInput');
    let secondInputValue = secondInput.value;
    let titleOfProduct = document.getElementById('productName');
    if(inputTitle === '' || secondInputValue === ''){
        alert("Enter A Value!");
        return;
    }else if(!isNaN(inputTitle)){
        alert("Value is a Number!");
        return;
    }else{
      titleOfProduct.textContent = inputTitle;
      secondExp.textContent = secondInputValue;
      expenseItem.classList.remove('hidden');
}
}


function secondExpeses(){
    expenses();
    let secondExpesesCost = document.querySelector('.expValue');
    let secondExpesesCostValue = secondExpesesCost.value;
    let secondExpesesShows = document.getElementById('secondExp');
    secondExpesesShows.textContent = secondExpesesCostValue;
}

