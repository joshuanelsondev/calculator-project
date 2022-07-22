



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
