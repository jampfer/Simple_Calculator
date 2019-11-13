var operand1 = '';
var operand2 = '';
var isoperand1empty = true;
var operator = '';

function typeNumber(number) {
    if (isoperand1empty) {
        operand1 = operand1 + number;
    } else {
        operand2 = operand2 + number;
    }
    document.getElementById('display').innerText = document.getElementById('display').innerText + number;
}

function typeOperator(operator_value) {

    operator = operator_value;
    operand1 = document.getElementById('display').innerText;
    isoperand1empty = false;
    document.getElementById('display').innerText = document.getElementById('display').innerText + operator_value;
}

function typeEqual() {
    operand1 = parseFloat(operand1)
    operand2 = parseFloat(operand2)
    var result = 0;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case 'x':
            result = operand1 * operand2;
            break;
    }
    operand1 = result;
    operand2 = '';
    if (operator == '+') {
        var result = operand1 + operand2;

    } else {
        if (operator == '-') {
            var result = operand1 - operand2;

        }
    }
    document.getElementById('display').innerText = result;
}

function typeClear() {
    document.getElementById('display').innerText = '';
}