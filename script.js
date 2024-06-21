const result = document.getElementById("result");

function appendValue(input) {
    result.value += input;
}

function clearResult() {
    result.value = '';
}

function evalResult() {
    result.value = eval(result.value);
}