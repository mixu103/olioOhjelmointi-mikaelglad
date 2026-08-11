"use strict";
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const AddBtn = document.getElementById("Add");
const SubBtn = document.getElementById("Sub");
const MultBtn = document.getElementById("Mult");
const DivBtn = document.getElementById("Div");
const printResult = document.getElementById("result");
function AddNumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
//# sourceMappingURL=laskin.js.map