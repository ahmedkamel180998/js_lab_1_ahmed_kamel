function printVariables(value1, value2, value3) {
  var localVar = 3;
  var testingVar = 5;

  console.log("Value1:", value1);
  console.log("Value2:", value2);
  console.log("Value3:", value3);

  console.log("Arguments Object:", arguments);

  return [value1, value2, value3];
}

const printVariablesExpression = function (value1 = 0, value2 = 0, value3 = 0) {
  var localVar = 3;
  var testingVar = 5;

  console.log("Value1:", value1);
  console.log("Value2:", value2);
  console.log("Value3:", value3);

  console.log("Arguments Object:", arguments);

  return [value1, value2, value3];
};

function sumTwoNumbers(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Both inputs must be numbers");
    return null;
  }

  return a + b;
}
