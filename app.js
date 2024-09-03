const inputEL = document.querySelector('input');
const numberbuttonsEL = document.querySelectorAll('.number')
const operatorButtonsEL = document.querySelectorAll(".operator");
const equalButtonEL = document.querySelector('.equal')
const resultEL = document.querySelector('.result')
const clearButtonEl = document.querySelector(".clear")
const clearAllButtonEL = document.querySelector(".clear-all")
const backspaceButtonEL = document.querySelector('.backspace')
 

let numberInput1 = "";
let numberInput2 = "";
let operator = ""
let result;
const listResult =[]
numberbuttonsEL.forEach((button) => {
    button.addEventListener("click" , () => {
        numberInput1 += button.textContent;
        inputEL.value = numberInput1
    })
})

operatorButtonsEL.forEach((button) => {
    button.addEventListener("click" , () => {
        operator = button.textContent;
        numberInput2 = numberInput1
        numberInput1 = ""
    })
})


clearButtonEl.addEventListener("click" , () => {

})


backspaceButtonEL.addEventListener("click" , () =>{
    numberInput1 = numberInput1.slice(0 , -1)
    inputEL.value = numberInput1
})



clearAllButtonEL.addEventListener("click" , () => {
    numberInput1 = ""
    numberInput2 = ""
    operator = ""
    result = ""
    inputEL.value = ""
    resultEL.innerHTML = 0
})

equalButtonEL.addEventListener("click" , () => {
    if(inputEL.value === "" || operator === ""){
        alert("First enter a value")
    }else{
        const number1 = +numberInput1
        const number2 = +numberInput2
        if(operator === "+"){
          result = number2 + number1
        }else if(operator === "-"){
            result = number2 - number1
        }else if(operator === "*"){
            result = number2 * number1
        }else if(operator === "/"){
            result = number2 / number1
        }
    
        resultEL.innerHTML = result 
        numberInput1 = result
        listResult.push(result)
        inputEL.value = ""  
    }
    console.log(listResult);
})












