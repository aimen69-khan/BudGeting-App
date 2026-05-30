function budget(){
    let firstInput = document.querySelector('.firstInput');
    let inputValue = firstInput.value.trim();
    let budgetValue = document.getElementById('budgetValue');
    if(inputValue === ''){
        alert("No Value Found!");
         return;
    }else{
        let currentBudget = parseFloat(budgetValue.textContent) || 0;
         budgetValue.textContent = currentBudget + parseFloat(inputValue);
          firstInput.value = '';
           balance();
    }
}


function balance(){
    let budgetNumber = parseFloat(document.getElementById('budgetValue').textContent) || 0;
    let expensesNumber = parseFloat(document.getElementById('expensesValue').textContent) || 0;
    let balanceDisplay = document.getElementById('balanceValue');
    balanceDisplay.textContent = budgetNumber - expensesNumber;
}


function expense(){
    let title = document.getElementById('inputTitle');
    let inputTitle = title.value.trim();
    let secondInput = document.getElementById('secondInput');
    let secondInputValue = secondInput.value.trim();
    let expensesValue = document.getElementById('expensesValue');
    let expenseCard = document.querySelector('.expense-card');

    if(inputTitle === '' || secondInputValue === ''){
        alert("NO value Found!");
        return;
    }else if(!isNaN(inputTitle)){
        alert("Value is a Number!");
        return;
    }else{
        let itemId = Date.now();
        let newItem = document.createElement('div');
        newItem.classList.add('expense-item');
        newItem.id = itemId;
        newItem.innerHTML = `
            <div class="expense-info">
                <span>${inputTitle}</span>
                <span>${secondInputValue}</span>
            </div>
            <div class="expense-actions">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        `;

        newItem.querySelector('.fa-trash').addEventListener('click', function(){
            deleteFunc(itemId, parseFloat(secondInputValue));
        });
        newItem.querySelector('.fa-pen-to-square').addEventListener('click', function(){
            editFunc(itemId, inputTitle, secondInputValue);
        });
        expenseCard.appendChild(newItem);
        let currentExpenses = parseFloat(expensesValue.textContent) || 0;
        expensesValue.textContent = currentExpenses + parseFloat(secondInputValue);
        title.value = '';
        secondInput.value = '';
        balance();
    }
}


function deleteFunc(removeId, cost){
    document.getElementById(removeId).remove();
    let expensesValue = document.getElementById('expensesValue');
    let currentExpenses = parseFloat(expensesValue.textContent) || 0;
    expensesValue.textContent = currentExpenses - cost;
    balance();
}


function editFunc(removeId, currentTitle, currentCost){
     document.getElementById(removeId);
     document.getElementById('inputTitle').value = currentTitle;
     document.getElementById('secondInput').value = currentCost;
     deleteFunc(removeId, parseFloat(currentCost));
}
