//take the user input for the first number
var num1 = window.prompt("Input First Number");
//take the operation input
var operator = window.prompt("Select an operator: +, -, *, /");
//take the user input for the second number
var num2 = window.prompt("Input Second Number");

let result;

// use "+" operator to add two numbers  
if (operator == '+') { 
  result = num1 + num2;  
}  

// use "-" operator to subtract two numbers  
else if (operator == '-') { 
  result = num1 - num2;  
}  

// use "*" operator to multiply two numbers  
else if (operator == '*') { 
  result = num1 * num2;  
}  
// use "/" operator to divide two numbers
else {  
  result = num1 / num2;   
}  

// display the result of the Calculator  
window.alert("Result is " + result);  