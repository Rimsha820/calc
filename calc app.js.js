
    function Display(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        var displayValue = document.getElementById('display').value;
        document.getElementById('display').value = displayValue.slice(0, -1);
    }

    function resetDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        try {
            var result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }

    function toggleSign() {
        var displayValue = document.getElementById('display').value;
        if (displayValue.charAt(0) === '-') {
            document.getElementById('display').value = displayValue.slice(1);
        } else {
            document.getElementById('display').value = '-(' + displayValue + ')';
        }
    }
    function calculatePercentage() {
        var displayValue = document.getElementById('display').value;
        var result = parseFloat(displayValue) / 100;
        document.getElementById('display').value = result;
    }


