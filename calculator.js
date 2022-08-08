
const add = function (firstNumber , secondNumber){
    let result;
    result = firstNumber + secondNumber;
    return result;
};

const substract = function (firstNumber , secondNumber){
    let result;
    result = firstNumber - secondNumber;
    return result;
};

const multiply = function (firstNumber , secondNumber){
    let result;
    result = firstNumber * secondNumber;
    return result;
};

const divide = function (firstNumber , secondNumber){
    let result;
    if(secondNumber == 0){
        return 'error';
    }
    result = firstNumber / secondNumber;
    return result;
};

const operate = function (operator,firstNumber,secondNumber){
    
    if(operator == '+'){
       return add(firstNumber , secondNumber);
    }
    else if(operator == '-'){
        return substract(firstNumber , secondNumber);
    }
    else if(operator == '*'){
        return multiply(firstNumber , secondNumber);
    }
    else if (operator == '/'){
        return divide(firstNumber , secondNumber);
    }
    
};

const mainDisplay = document.querySelector ('#mainDisplay');
const scnDisplay = document.querySelector ('#scnDisplay'); 
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const allClear = document.getElementById ('AC');
const equal = document.getElementById('equal');
let firstTerm;
let secondTerm;
let operator;
equal.disabled = true;

const clear = allClear.addEventListener('click',()=>{
    mainDisplay.innerHTML = "";
    scnDisplay.innerHTML = "";
    firstTerm = "";
    secondTerm = "";
    equal.disabled = true;
});


for (button of numbers) {
    button.addEventListener('click', function () {
      
        mainDisplay.innerHTML += this.value;
     
    });
};

for (operator of operators){
    operator.addEventListener('click', function() {
        
        firstTerm = mainDisplay.innerHTML;
        operator = this.value;
        scnDisplay.innerHTML = firstTerm;
        mainDisplay.innerHTML = "";
        equal.disabled = false;
        
    });
};

const result = equal.addEventListener('click', function(){
    secondTerm = mainDisplay.innerHTML;
    mainDisplay.innerHTML="";
    scnDisplay.innerHTML = `${firstTerm} ${operator} ${secondTerm} =`;
    mainDisplay.innerHTML = operate(operator,parseInt(firstTerm),parseInt(secondTerm));
    equal.disabled = true;
 
});






    
