const inputA = document.getElementById("a") as HTMLInputElement;
const inputB = document.getElementById("b") as HTMLInputElement;

document.getElementById("+")!.addEventListener("click", () => {
    const result =
        Number(inputA.value) + Number(inputB.value);

    document.getElementById("result")!.innerHTML = result.toString();
});

document.getElementById("-")!.addEventListener("click", () => {
    const result =
        Number(inputA.value) - Number(inputB.value);

    document.getElementById("result")!.innerHTML = result.toString();
});

document.getElementById("*")!.addEventListener("click", () => {
    const result =
        Number(inputA.value) * Number(inputB.value);

    document.getElementById("result")!.innerHTML = result.toString();
});

document.getElementById("/")!.addEventListener("click", () => {
    const result =
        Number(inputA.value) / Number(inputB.value);

    document.getElementById("result")!.innerHTML = result.toString();
});