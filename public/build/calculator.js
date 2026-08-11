"use strict";
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const result = document.getElementById("result");
const button = document.getElementById("sumButton");
function sum() {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    result.innerHTML = String(a + b);
}
button.addEventListener("click", sum);
//# sourceMappingURL=calculator.js.map