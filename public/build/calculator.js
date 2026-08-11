"use strict";
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
document.getElementById("+").addEventListener("click", () => {
    const result = Number(inputA.value) + Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
document.getElementById("-").addEventListener("click", () => {
    const result = Number(inputA.value) - Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
document.getElementById("*").addEventListener("click", () => {
    const result = Number(inputA.value) * Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
document.getElementById("/").addEventListener("click", () => {
    const result = Number(inputA.value) / Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
//# sourceMappingURL=calculator.js.map