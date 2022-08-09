
const add = function (firstNumber , secondNumber){
    return firstNumber + secondNumber;
};

const substract = function (firstNumber , secondNumber){
    return firstNumber - secondNumber;
};

const multiply = function (firstNumber , secondNumber){
    return firstNumber * secondNumber;
};

const divide = function (firstNumber , secondNumber){
    
    if(secondNumber == 0){
        return 'error';
    }
    return firstNumber / secondNumber;
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
let firstTerm="";
let secondTerm="";
let operator = "";



const clear = allClear.addEventListener('click',()=>{
    mainDisplay.innerHTML = "";
    scnDisplay.innerHTML = "";
    firstTerm = "";
    secondTerm = "";
   
});


for (button of numbers) {
    button.addEventListener('click', function () {
        mainDisplay.innerHTML += this.value;
       

     
    });
};

for (operator of operators){
    operator.addEventListener('click', function() {
        if(mainDisplay.innerHTML==""){
            return false;
        };
        firstTerm = mainDisplay.innerHTML;
        operator = this.value;
        scnDisplay.innerHTML = `${firstTerm} ${this.value}`;
        mainDisplay.innerHTML = "";

        
        
    });
};

const result = equal.addEventListener('click', function(){
    
    if(firstTerm == ""){
        return false;
    };

    secondTerm = mainDisplay.innerHTML;
    scnDisplay.innerHTML = `${firstTerm} ${operator} ${secondTerm} =`;
    mainDisplay.innerHTML = operate(operator,parseInt(firstTerm),parseInt(secondTerm));
    
 
});






    
