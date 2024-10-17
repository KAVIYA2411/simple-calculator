function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let input = document.getElementById('display').value;
    
    try {
        let result = eval(input);
        
        if (isNaN(result) || !isFinite(result)) {
            document.getElementById('display').value = 'Invalid Input';
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Invalid Input';
    }

}

function deleteLastDigit() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}