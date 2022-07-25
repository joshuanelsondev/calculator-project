
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


const display = document.getElementById('display');
const displayValue = 0;
display.innerText = displayValue;
const buttons = Array.from(document.querySelectorAll('button'));



updateDisplay = (e) => {
    switch (e.target.value) {
        case 'AC':
            display.innerText = 0;
            break;
        case 'C':
            if (display.innerText != '0'){
                display.innerText = display.innerText.slice(0, -1);
            }      
            break;
        case 'positiveNegative':
            display.innerText = '-' + display.innerText;
            break;

        default:
            switch (display.innerText) {
                case '0':
                    display.innerText = '';
                    display.innerText += e.target.value;
                    break;
                default:
                    display.innerText = e.target.value + display.innerText;
            }

            if (display.innerText.length > 11) {
                display.innerText = display.innerText.slice(0, -1);
            } else if (display.innerText.length === 3 || display.innerText.length === 7) {
                display.innerText = e.target.value + ',' + display.innerText;
            }

    }
};

buttons.map(button => { button.addEventListener('click', updateDisplay); });

// updateDisplay();

// clear = () => {

// };






