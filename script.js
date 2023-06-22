function addIncomeField() {
    var incomeFields = document.getElementById('incomeFields');
    var newIncomeField = document.createElement('div');
    newIncomeField.classList.add('income-field');
    var newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.placeholder = 'Ingreso';
    newIncomeField.appendChild(newInput);
    incomeFields.appendChild(newIncomeField);
  }

  function removeIncomeField() {
    var incomeFields = document.getElementById('incomeFields');
    var lastIncomeField = incomeFields.lastElementChild;
    if (lastIncomeField) {
      incomeFields.removeChild(lastIncomeField);
    }
  }

  function calculateIncome() {
    var incomeFields = document.querySelectorAll('#incomeFields input[type="number"]');
    var totalIncome = 0;
    for (var i = 0; i < incomeFields.length; i++) {
      var income = parseFloat(incomeFields[i].value);
      if (!isNaN(income)) {
        totalIncome += income;
      }
    }

    document.getElementById('totalIncome').textContent = 'Ingreso total: $' + totalIncome.toFixed(2);
  }