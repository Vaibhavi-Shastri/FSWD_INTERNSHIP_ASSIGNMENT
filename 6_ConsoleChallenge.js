console.log("Simple Caluculator");
let num1=Number(prompt("Enter the first number: "));
let num2=Number(prompt("Enter second number: "));
let choice=(prompt("Enter operator (+,-,*,/): "));
let result;
switch(choice){
    case "+":
        result=num1+num2;
        console.log("Addition result: ",result);
        break;
    case "-":
        result=num1-num2;
        console.log("Subtraction Result: ",result);
        break;
    case "*":
        result=num1*num2;
        console.log("Multiplication result: ",result);
        break;
    case "/":
        if (num2!=0){
            result=num1/num2;
            console.log("Division result: ",result);
            break;
        }else{
            console.log("Error: Division by zero is not allowed.");
            break;
        }
    default:
        console.log("Error: Invalid operator. Please enter one of +,-,*,/");
}
