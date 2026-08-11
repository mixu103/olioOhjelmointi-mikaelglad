
function sum(a: number, b: number): number {
    return a + b;
}

function difference(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function division(a: number, b: number): number {
    return a / b;
}

function modulo(a: number, b: number): number {
    return (a % b);
}


function calculate(calculator: (arg0: number, arg1: number) => number) {
    const inputA: HTMLInputElement = document.getElementById("a") as HTMLInputElement;
    const inputB: HTMLInputElement = document.getElementById("b") as HTMLInputElement;
    
    const result: number = calculator(Number(inputA.value), Number(inputB.value));

    document.getElementById("result")!.innerHTML = result.toString();
}

function registerCalculator(id: string, calculator: (arg0: number, arg1: number) => number) {
document.getElementById(id)!.addEventListener("click", (e:PointerEvent) => {
        calculate(calculator);
    })
}

registerCalculator("+", sum);
registerCalculator("-", difference);
registerCalculator("*", multiply);
registerCalculator("/", division);
registerCalculator("%", modulo);


export {}