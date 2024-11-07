const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const operation = document.getElementById('operation').value;

    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    errorDiv.textContent = '';
    resultDiv.textContent = '';

    if (number1 === '' || number2 === '') {
        errorDiv.textContent = 'Необходимо ввести оба числа.';
        return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorDiv.textContent = 'Деление на ноль невозможно.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorDiv.textContent = 'Неизвестная операция.';
            return;
    }

    resultDiv.textContent = 'Результат: ' + result;
});