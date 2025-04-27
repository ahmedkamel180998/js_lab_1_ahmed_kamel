//calling printVariables before definition
console.log(printVariables(1, 2, 3));

let result = printVariables(10, 20, 30);
console.log(result);

// Call with LESS than 3 parameters
const result2 = printVariables(5, 7);
console.log(result2);

// Call with MORE than 3 parameters
const result3 = printVariables(1, 2, 3, 4, 5, 6);
console.log(result3);

console.log(localVar);
console.log(testingVar);

printVariables(100, 200, 300);
console.log(typeof localVar);
console.log(typeof testingVar);

console.log(printVariablesExpression(1, 2, 3));

console.log("Sum:", sumTwoNumbers(5, 10));

// b- Insert less than 2 inputs
console.log("Sum with 1 input:", sumTwoNumbers(7));

// c- Insert wrong types
console.log("Sum with wrong types:", sumTwoNumbers("hello", 10));
console.log("Sum with wrong types:", sumTwoNumbers(5, "world"));
