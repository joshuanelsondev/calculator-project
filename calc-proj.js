
// Time function
function time() {
    const today = new Date();
    let hours = today.getHours();
    hours = (hours % 12) || 12;
    let mins = today.getMinutes();
    mins = mins < 10 ? '0' + mins : mins;
    const time = hours + ':' + mins;
    document.getElementById('time').innerHTML = time;
}

class Calculator {
    constructor(previousNumber, currentNumber) {
        this.previousNumber = previousNumber;
        this.currentNumber = currentNumber;
    }

    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
            this.currentNumber = this.currentNumber.toString() + number.toString();

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentNumber.innerText = this.currentNumber;

    }
}




const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const clearAllButton = document.querySelector(`[data-clearAll]`);
const deleteButton = document.querySelector(`[data-delete]`);
const negateButton = document.querySelector(`[data-negate]`);
const previousNumber = document.querySelector(`[data-previousNumber]`);
const currentNumber = document.querySelector(`[data-currentNumber]`);

const calculator = new Calculator(previousNumber, currentNumber);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});










// const display = document.getElementById('display');
// let displayValue = '0';
// display.innerText = displayValue;
// const buttons = Array.from(document.querySelectorAll('button'));
// let displayLimit = false;

// updateDisplay = (e) => { 
    
//     switch (e.target.value) {
//         case 'AC':
//             displayLimit = false;
//             displayValue = 0;
//             break;
//         case 'C':
//             if (displayValue != '0') {
//                 displayValue = displayValue.slice(0, -1);
//                 displayLimit = false;
//             }
//             break;
//         case 'positiveNegative':
//             displayValue = '-' + displayValue;
//             break;
//         default:
//             switch (displayValue) {
//                 case '0':
//                     displayValue = '';
//                     displayValue += e.target.value;
//                     break;
//                 default:
//                     displayValue += e.target.value;
                    
//             }
            
//     }
//     if (displayValue.length >= 9) {
//        displayLimit = true;
//     } 
//     display.innerText = Number(displayValue).toLocaleString();
    
    
// };

// toggleDisplay = () => {
//     if(displayLimit) {
//        displayLimit = true;
//     } else {
//         displayLimit = false;
//     }
//     return displayLimit;
// };

// buttons.map(button => { button.addEventListener('click', updateDisplay); });

// updateDisplay();

// clear = () => {

// };






