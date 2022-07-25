
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

let displayValue = 0;
const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));


buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.value) {
            case 'AC':
                display.innerHTML = 0;
                break;
            case 



            default:
                display.innerHTML += e.target.value;
        }
    });
}); 

updateDisplay = () => {
    
    if(displayValue.length > 9) {
        display.innerHTML = displayValue.substring(0,9);
    }
    if(displayValue != 0) {
        display.innerHTML = displayValue;

        
    } else {
        display.innerHTML = displayValue;
    }
};

updateDisplay();

clear = () => {

};






