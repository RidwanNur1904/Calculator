const display = document.getElementById('result');
let operand1 = null;
let operand2 = null;
let currentOperator = '';

document.querySelector('.calculator .buttons').addEventListener('click', (event) => {
    if(event.target.matches('button')){
        let buttonText = event.target.innerText;
        if(buttonText === 'C'){
            // Clear all values
            operand1 = null;
            operand2 = null;
            currentOperator = '';
            display.value = '';
        } else if(operand1 !== null && !isNaN(buttonText)){
            // Add new number
            if(currentOperator === ''){
                operand1 = parseFloat(operand1 + buttonText);
            }else{
                operand2 = parseFloat(operand2 + buttonText);
            }
            display.value = operand1 || operand2;
        } else if(buttonText !== '.'){
            // Operator or equals
            currentOperator = buttonText;
            if(operand1 === null){
                operand1 = operand2 || 0;
                operand2 = 0;
            }
            switch(currentOperator){
                case '+':
                    display.value = add();
                    break;
                case '-':
                    display.value = subtract();
                    break;
                case '*':
                    display.value = multiply();
                    break;
                case '/':
                    display.value = divide();
                    break;
                case '=':
                    display.value = performCalculation();
                    operand1 = null;
                    operand2 = null;
                    currentOperator = '';
                    break;
            }
        }
    }
});

function add(){
    return operand1 + operand2;
}

function subtract(){
    return operand1 - operand2;
}

function multiply(){
    return operand1 * operand2;
}

function divide(){
    if(operand2 !== 0){
        return operand1 / operand2;
    } else{
        alert("Cannot divide by zero");
        return 0;
    }
}

function performCalculation(){
    switch(currentOperator){
        case '+':
            return add();
        case '-':
            return subtract();
        case '*':
            return multiply();
        case '/':
            return divide();
        default:
            return 0;
    }
}