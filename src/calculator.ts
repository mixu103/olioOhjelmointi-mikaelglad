const inputA = document.getElementById("a") as HTMLInputElement;
const inputB = document.getElementById("b") as HTMLInputElement;
const result = document.getElementById("result") as HTMLSpanElement;
const button = document.getElementById("sumButton") as HTMLButtonElement;

function sum(): void {
    const a = Number(inputA.value);
    const b = Number(inputB.value);

    result.innerHTML = String(a + b);
}

button.addEventListener("click", sum);