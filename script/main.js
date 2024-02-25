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
    var historyDiv = document.getElementById('history');
    var expression = resultField.value;
    var result;
    try {
        result = eval(expression);
        var historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = expression + ' = ' + result;
        historyDiv.appendChild(historyItem);
    } catch (error) {
        result = 'Error';
    }
    resultField.value = result;
}