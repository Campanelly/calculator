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

console.log(operate('*',545,13));
console.log(operate('+',200,-30));
console.log(operate('/',453,83));
console.log(operate('-',1371,2500));

