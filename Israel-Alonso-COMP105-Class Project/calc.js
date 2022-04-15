// Israel Alonso
// COMP105
// Calculator functions

var currentValue = 0;
var currentOperator = "";
var isCalculating = false;

function input(number)
{
    // Handle is calculating
    if (isCalculating)
    {
        document.getElementById("display").value = number;
        isCalculating = false;
        return;
    }

    var currentNumber = document.getElementById("display").value;
    if (currentNumber == 0)
    {
        // clears it out
        document.getElementById("display").value = "";
    }

    // all other numbers get put straight in
    document.getElementById("display").value += number;
}
function operate(operator)
{
   //set calculating
    isCalculating = true; 
    
    // Store the current value
    currentValue = parseFloat(document.getElementById("display").value); 

        // Store the operator
    currentOperator = operator;
    
}

//Turns the number on the display to 0
function clearOut()
{
    currentOperator = "";
    currentValue = 0;
    isCalculating = false;
    document.getElementById("display").value = 0;
}

//Clears out everything in the paper tape
function paperClear()
{
    document.getElementById("paperTape").value = "";
}

//Makes the number value into a fraction
function recipicate()
{
    document.getElementById("display").value = 1 / 
    document.getElementById("display").value;         
}

//The value of the display is the exponent to 10
function expoTen()
{
    document.getElementById("display").value =
        Math.pow(10, document.getElementById("display").value);
    
}

//Squares the value in the display
function square()
{
    
    document.getElementById("display").value = 
        Math.pow(document.getElementById("display").value, 2)
}

//Square roots the value in the display
function squrt()
{
    document.getElementById("display").value = 
        Math.sqrt(document.getElementById("display").value, 0.5);
}

//Appears PI on the display
function pie()
{
    document.getElementById("display").value = Math.PI;    
}

//It turns the number in the display into a sine answer
function sine()
{
    document.getElementById("display").value = 
        Math.sin(document.getElementById("display").value);    
}

//It turns the number in the display into a cosine answer
function cosine()
{
    document.getElementById("display").value =
        Math.cos(document.getElementById("display").value);   
}

//It turns the number in the display into a tangent answer
function tangent()
{
    document.getElementById("display").value = 
        Math.tan(document.getElementById("display").value);   
}

//Turn the number in the display into a percentage in decimal form 
function percent()
{
    document.getElementById("display").value = 
    document.getElementById("display").value * Math.pow(10, -2);  
}

//Adds the value a decimal 
function decimal()
{
    var theEnd = document.getElementById("display").value.push();
    console.log(document.getElementById("display").value 
        = document.getElementById("display").value *  Math.pow (10, -1));
      
}

//Turns the value negative
function neg()
{
    document.getElementById("display").value = 
        -(document.getElementById("display").value);
    currentValue = - currentValue;
}

//Gets any random number from 0 to 1 with one not in its
function random()
{
    document.getElementById("display").value = Math.random();
}

//Multipies the number from one to the value in the display
function xexclamation()
{
    var input = document.getElementById("display").value;
    for (count = 1; count < input; count++)
    {
        document.getElementById("display").value *= count;
    } 
}

//Calculates the numbers displayed
function equals()
{
    var secondValue = parseFloat(document.getElementById("display").value);
    var afterResult;
    var result;
    
    switch(currentOperator)
    {
        //Each one is added to the paper tape after clicking the equal sign
        //Also the display shows the answer

        //The ones with 'result' will have a solution to add to the display

        //AfterResult copies it to the paper tape
        case "+":
            result = currentValue + secondValue;
            afterResult = currentValue + " + " + secondValue 
                + " = " ;
            if (currentValue = -(currentValue) ) 
            {
                result = -(currentValue) + secondValue;
            }
            break;
        case "-":
            result = currentValue - secondValue;
            afterResult = currentValue + " - " + secondValue 
                + " = ";     
            break;
        case "*":
            result = currentValue * secondValue; 
            afterResult = currentValue + " * " + secondValue 
                + " = ";
            break;
        case "÷":
            result = currentValue / secondValue;
            afterResult = currentValue + " / " + secondValue 
                + " = ";     
            break;
        case "x^y":
            result = Math.pow(currentValue, secondValue);
            afterResult = "pow(" + currentValue + " , " + 
                secondValue + ") = "; 
            break;

        case "x^2":
            var firstValue = Math.pow(currentValue, 0.5);
            var square =  Math.pow(firstValue, 2);
            afterResult = "pow(" + firstValue + " , " + 2 
                + ") = " + square; 
            break;

        case "x^1/2":
            var firstValue = Math.pow(currentValue, 2);
            var squrt =  Math.pow(firstValue, 0.5);
            afterResult = "pow(" + firstValue + " , " + "1/2" 
                + ") = " + squrt;
            firstValue = currentValue;  
            break;

        case "PI":
            afterResult = Math.PI + " = " + Math.PI;
            break;

        case "10^x":
            var firstValue = Math.log10(currentValue);
            var expoTen =  Math.pow(10, firstValue);
            afterResult = 
                "pow(" + 10 + " , " + firstValue+ ") = " + expoTen;  
            break;

        case "sin":
            var equation = Math.sin(currentValue);
            afterResult = "sin(" + currentNumber + ") " + " = " 
                + equation;
            break;

        case "cos":
            var equation = Math.cos(currentValue);
            afterResult = "cos(" + currentValue + ") " + " = " 
            + equation;
            break;

        case "tan":
            var equation = Math.tan(currentValue);
            afterResult = "tan(" + firstValue + ") " + " = " 
                + equation;
            break;

        case "1/x":
            var firstValue = 1 / currentValue;
            var recipicate =  1 / firstValue;
            afterResult = "1 / " + firstValue + " = " 
                + recipicate; 
            break;
        case "minus":
            var firstValue = -(currentValue);
            var negative =  -(firstValue); 
            afterResult = negative + " = " + negative;
            break;
        case "%":
            var firstValue = currentValue * Math.pow(10, 2); 
            var percentage = firstValue * Math.pow(10, -2); 
            afterResult = "% " + firstValue + " = " + percentage;
            break;
        case "x!":
            var input = document.getElementById("display").value;
            for (count = 1; count <  input; count++)
            {
                input *= (1/count);
            } 
            afterResult = input + "!" + " = " + currentValue;
            break;
        case "rand":
        var random = Math.random();
        afterResult = random + " = " + random;

        //If imperfect then a message will display
        default:
            console.log("We have an error in equals");
            document.getElementById("display").value = "Error";
    }
    // Displays results and adds it to the main display
    document.getElementById("display").value = result;   
    
    //Makes sures that if 'result' is active the answer follows
    if(result)
    {    
        document.getElementById("paperTape").value = afterResult + result;  
        document.getElementById("paperTape").value += "\n";
        //input(result);
    }

    //If no 'result' then just the after result is displayed
    else
    {
        document.getElementById("paperTape").value += afterResult + "\n";
    }
 
}
