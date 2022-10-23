let trailingResult = 0;
let operationOptions = ['add', 'subtract', 'divide', 'multiply']
let workingOperation = "";

function calculate(input) {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");

    if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0.";
        } else if (input === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {

                display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-1" > -1)) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }

        } else {
            display.innerHTML = input;
        }
    } else if (operationOptions.indexOf(input) >= 0) {

        if (trailingResult === display.innerHTML) {

        } else if (workingOperation === "") {
            //handling operands
            workingOperation = input;
            trailingResult = display.innerHTML;
            display.innerHTML = 0;
        } else {

            trailingResult = computeAll(trailingResult, display.innerHTML, workingOperation);
            secondaryDisplay.innerHTML = trailingResult;
            display.innerHTML = 0;
            workingOperation = input;
        }

    } else if (input === "equals") {

        display.innerHTML = computeAll(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";
        secondaryDisplay.innerHTML = trailingResult;

    } else if (input === "decimal") {

        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }


    } else if (input === "negative-value") {
        if (display.innerHTML.indexOf("-1") === -1) {

            display.innerHTML = "-" + display.innerHTML;
        } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
    } else {
        display.innerHTML += input;
    }
}

function computeAll(num1, num2, operation) {

    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2)

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;;
            break;

        case "multiply":
            result = num1 * num2;;
            break;

        case "divide":
            result = num1 / num2;;
            break;

            //    case "":
            //     result = num1 + num2; ;
            //    break;

        default:
            console.log("bye");
            break;
    }
    return result.toString();
}

function clearData() {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");
    display.innerHTML = 0;
    trailingResult = 0;
    secondaryDisplay.innerHTML = trailingResult;
}