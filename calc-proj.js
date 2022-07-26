
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
        this.clear();
        display.innerText = 0;
    }

    clear() {
        this.currentOperand = ''; 
        this.previousOperand = '';
        this.operation = undefined;
        
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        

    }

    chooseOperation(operation) {
        // if (this.currentOperand === '') return;
        // if (this.previousOperand !== '') {
        //     this.compute();
        // }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        display.innerText = this.previousOperand;

    }

    compute() {

        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '–':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '%':
                computation = prev / 100;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
  
    updateDisplay() {
        display.innerText = this.currentOperand;
       
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
const display = document.getElementById('display');

const calculator = new Calculator(previousNumber, currentNumber);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        if (display != 0) {
            operationButtons.forEach(button => {
                switch (button.innerText) {
                    case '÷':
                    case '×':
                    case '–':
                    case '+':
                        button.style.cssText = 'background-color: #ff9500; color: white; transition: color 3s ease;';
                        break;
                    default:
                        return;
                }
            });
        }
    });

    

});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        switch (button.innerText) {
            case '÷':
            case '×':
            case '–':
            case '+':
                button.style.cssText = 'background-color: white; color: #ff9500;';
                break;
            default:
                return;
        }
    });
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clearAllButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
    display.innerText = 0;
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






