function sum(a, b) {
    return a + b;
}
function difference(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function modulo(a, b) {
    return (a % b);
}
function calculate(calculator) {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = calculator(Number(inputA.value), Number(inputB.value));
    document.getElementById("result").innerHTML = result.toString();
}
function registerCalculator(id, calculator) {
    document.getElementById(id).addEventListener("click", (e) => {
        calculate(calculator);
    });
}
registerCalculator("+", sum);
registerCalculator("-", difference);
registerCalculator("*", multiply);
registerCalculator("/", division);
registerCalculator("%", modulo);
export {};
//# sourceMappingURL=calculator.js.map