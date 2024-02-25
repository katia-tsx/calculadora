function appendToResult(value) {
    var resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    var resultField = document.getElementById('result');
    resultField.value = '';
}

function calculate() {
    var resultField = document.getElementById('result');
    var expression = resultField.value;
    var result;
    try {
        result = eval(expression);
        displayResult(result);
        addToHistory(expression, result);
    } catch (error) {
        displayResult('Error');
    }
}

function displayResult(value) {
    var resultField = document.getElementById('result');
    resultField.value = value;
}

function addToHistory(expression, result) {
    var history = JSON.parse(localStorage.getItem('calculator_history')) || [];
    var historyItem = { expression: expression, result: result };
    history.push(historyItem);
    localStorage.setItem('calculator_history', JSON.stringify(history));
    updateHistoryDisplay(history);
}

function updateHistoryDisplay(history) {
    var historyDiv = document.getElementById('history');
    historyDiv.innerHTML = ''; 
    history.forEach(function(item) {
        var historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = item.expression + ' = ' + item.result;
        historyDiv.appendChild(historyItem);
    });
}

