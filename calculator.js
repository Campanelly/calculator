
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

/*<input type="button" value="test" onClick="document.getElementById('textfield').innerHTML=this.value">
<div id="textfield"></div>*/
/*
const one = document.querySelector('#one');
const operator = document.getElementsByClassName('operator');
const AC = document.getElementsByClassName('AC');
const equal = document.getElementsByClassName('equal');

const click = one.addEventListener('click',console.log('click'));*/
const mainDisplay = document.querySelector ('#mainDisplay');
const scnDisplay = document.querySelector ('#scnDisplay'); 
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const allClear = document.getElementById ('AC');
let firstTerm;
let secondTerm;
const clear = allClear.addEventListener('click',()=>{
    mainDisplay.innerHTML = "";
    scnDisplay.innerHTML = "";
});


for (button of numbers) {
    button.addEventListener('click', function onClick() {
      mainDisplay.innerHTML += this.value;
      
    });
  }
for (operator of operators){
    operator.addEventListener('click', function() {
        firstTerm = mainDisplay.innerHTML;
        scnDisplay.innerHTML = firstTerm + this.value;
        mainDisplay.innerHTML = '';
        
    });
}




    
