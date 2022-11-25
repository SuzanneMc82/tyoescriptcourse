//Union types with Literal Types
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string" //Union types combined with literal types
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ", " + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedAgesStings = combine("30", "30", "as-number");
console.log(combinedAgesStings);

const combinedNames = combine("Elsa", "Anna", "as-string");
console.log(combinedNames);
