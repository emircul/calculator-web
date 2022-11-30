var _buttons = document.querySelectorAll("button"),
    _buttonsCount = _buttons.length,
    _result = document.querySelector("#result");

for (iter = 0; iter < _buttonsCount; iter++) {
    _buttons[iter].onclick = doit;
}

function doit() {
    var _currentValue = this.innerHTML;

    if (_currentValue == "=") {
        try {
            _result.value = eval(_result.value);
        } catch (e) {
            _result.value = 0;
        }
        return;
    }

    _result.value += _currentValue;

    if(_currentValue == "AC") {
        _result.value = null
    }

    if(_currentValue == "⌫") {
        var lastValue = _result.value
        _result.value = lastValue.slice(0, -2);
    }
}