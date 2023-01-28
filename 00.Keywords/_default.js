function calculate({a = 2, b = 3, operation = "add"} = {}) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return "Invalid operation";
  }
}

console.log(calculate({ a: 5, b: 6, operation: "add" })); // ans:  11
console.log(calculate({ a: 5, operation: "multiply" })); // ans:  15
console.log(calculate({ b: 5, operation: "divide" })); // ans:  0.4
console.log(calculate()); // ans:  5 (2 + 3)
