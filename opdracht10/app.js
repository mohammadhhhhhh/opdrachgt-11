
function getNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    return { num1, num2 };
}





function checkInputs(numbers) {
    return numbers.num1 > 0 && numbers.num2 > 0;
}



function add() {
    let numbers = getNumbers();
    if (checkInputs(numbers)) {
        document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 + numbers.num2);

    } else {
        document.getElementById("result").innerHTML = "Het getal is te laag";
    }
}





function minus() {
    let numbers = getNumbers();
    if (checkInputs(numbers)) {
        document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 - numbers.num2);
    } else {
        document.getElementById("result").innerHTML = "Het getal is te laag";
    }
}
function multiply() {
    let numbers = getNumbers();
    if (checkInputs(numbers)) {
        document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 * numbers.num2);
    } else {
        document.getElementById("result").innerHTML = "Het getal is te laag";
    }
}
function divide() {
    let numbers = getNumbers();
    if (checkInputs(numbers)) {
        if (numbers.num2 !== 0) {
            document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 / numbers.num2);
        } else {
            document.getElementById("result").innerHTML = "Niet delen door nul!";
        }
    } else {
        document.getElementById("result").innerHTML = "Het getal is te laag";
    }
}
