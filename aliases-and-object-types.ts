type Combinable = number | string; //Custom Type Alias using a union type
type ConversionDescriptor = "as-number" | "as-string"; //Custom Type Alias using union type combined with literal types

//Union types with Literal Types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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
