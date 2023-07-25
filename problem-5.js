/* Task 5: Implement a simple JavaScript calculator. 
The calculator should take two numbers and an 
operator (+, -, *, /) as input and 
return the result of the operation.
 */

const calculator = (number1, operator, number2) => {
    switch (operator) {
        case '+':
            return `the sum of ${number1} and ${number2} are: ${number1 + number2}`;
        case '-':
            return `the substruct of ${number1} and ${number2} are: ${number1 - number2}`;
        case '*':
            return `the multipication of ${number1} and ${number2} are: ${number1 * number2}`;
        case '/':
            return `the Substruct of ${number1} and ${number2} are: ${number1 / number2}`;


        default:
            return "Envalid Operator";
    }
}

number1 = 5;
number2 = 6;
operator = "/";

console.log(calculator(number1, operator, number2));
