const number1 = document.getElementById('number1') as HTMLInputElement;
const number2 = document.getElementById('number2') as HTMLInputElement;

const AddBtn = document.getElementById("Add") as HTMLButtonElement;
const SubBtn = document.getElementById("Sub") as HTMLButtonElement;
const MultBtn = document.getElementById("Mult") as HTMLButtonElement;
const DivBtn = document.getElementById("Div") as HTMLButtonElement;

const printResult = document.getElementById("result") as HTMLOutputElement;

function AddNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printResult.textContent = result.toString();
    
}
AddBtn.addEventListener("click", AddNumbers);

function SubtractNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubtractNumbers);
