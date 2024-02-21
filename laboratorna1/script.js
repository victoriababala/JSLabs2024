function triangle(val1 = 3, type1 = "leg", val2 = 4, type2 = "leg") {
  const validTypes = [
    "leg",
    "hypotenuse",
    "adjacent angle",
    "opposite angle",
    "angle",
  ];

  const anglesTypes = ["adjacent angle", "opposite angle", "angle"];

  const isValidType = (type) => validTypes.includes(type);

  const isValidValue = (val) => val > 0 && typeof val === "number";

  const isAngle = (type) => anglesTypes.includes(type);

  const isValidAngle = (angle) => angle < 90;

  const isLeg = (type) => type === "leg";

  const isHypotenuse = (type) => type === "hypotenuse";

  const isValidTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;

  const toDegrees = (angle) => angle * (180 / Math.PI);

  const toRadians = (angle) => angle * (Math.PI / 180);

  let a, b, c, alpha, beta;

  if (!isValidType(type1) || !isValidType(type2)) {
    console.log(
      "Please read the instructions again and provide valid types in valid order."
    );
    return "failed";
  }

  if (!isValidValue(val1) || !isValidValue(val2)) {
    return "Invalid input: Values must be positive number and non-zero.";
  }

  if (type1 === "hypotenuse" && type2 === "hypotenuse") {
    console.log(
      "Invalid input: Two hypotenuses are provided. Please provide valid types in valid order."
    );
    return "failed";
  }
  if (
    (isHypotenuse(type1) && isLeg(type2) && val1 - val2 <= 0) ||
    (isHypotenuse(type2) && isLeg(type1) && val2 - val1 <= 0)
  ) {
    return "Hypotenuse must be greater than the leg";
  }
  if (isAngle(type1) && isAngle(type2)) {
    console.log(
      "Invalid input: Two angles are provided. Please provide valid types in valid order."
    );
    return "failed";
  }
  if (
    (isAngle(type1) && !isValidAngle(val1)) ||
    (isAngle(type2) && !isValidAngle(val2))
  ) {
    return "The angles of the triangle must be acute";
  }

  switch (type1) {
    case "leg":
      a = val1;
      switch (type2) {
        case "hypotenuse":
          c = val2;
          b = Math.sqrt(c * c - a * a);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
        case "leg":
          b = val2;
          c = Math.sqrt(a * a + b * b);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
        case "adjacent angle":
          beta = val2;
          alpha = 90 - beta;
          c = a / Math.cos(toRadians(beta));
          b = Math.sqrt(c * c - a * a);
          break;
        case "opposite angle":
          alpha = val2;
          beta = 90 - alpha;
          c = a / Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          console.log("Not enough information to perform calculations");
          return "failed";
      }
      break;
    case "hypotenuse":
      c = val1;
      switch (type2) {
        case "leg":
          a = val2;
          b = Math.sqrt(c * c - a * a);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
        case "angle":
          alpha = val2;
          beta = 90 - alpha;
          a = c * Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          console.log("Not enough information to perform calculations");
          return "failed";
      }
      break;
    case "adjacent angle":
      alpha = val1;
      beta = 90 - alpha;
      switch (type2) {
        case "leg":
          a = val2;
          c = a / Math.cos(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        case "hypotenuse":
          c = val2;
          a = c * Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          console.log("Not enough information to perform calculations");
          return "failed";
      }
      break;
    case "opposite angle":
      alpha = val1;
      beta = 90 - alpha;
      switch (type2) {
        case "leg":
          a = val2;
          c = a / Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        case "hypotenuse":
          c = val2;
          a = c * Math.cos(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          console.log("Not enough information to perform calculations");
          return "failed";
      }
      break;
    case "angle":
      alpha = val1;
      beta = 90 - alpha;
      c = val2;
      a = c * Math.sin(toRadians(alpha));
      b = Math.sqrt(c * c - a * a);
      break;
  }

  if (!isValidTriangle(a, b, c)) {
    return "Such a triangle does not exist, since any side of the triangle must be less than the sum of its other two sides.";
  }

  if (!isValidAngle(alpha) || !isValidAngle(beta)) {
    return "The angles of the triangle must be acute";
  }

  console.log(
    " a:",
    a,
    "\n",
    "b:",
    b,
    "\n",
    "c:",
    c,
    "\n",
    "alpha:",
    alpha,
    "\n",
    "beta:",
    beta
  );
  return "success";
}
console.log(`Instruction for using the 'triangle' function:

1. Initial values:
   - The 'triangle' function takes four parameters:
     - 'val1' (default 3): Value for the first side or angle of the triangle.
     - 'type1' (default "leg"): Type of the first value. Possible options: "leg" (side), "hypotenuse", "adjacent angle", "opposite angle", "angle".
     - 'val2' (default 4): Value for the second side or angle of the triangle.
     - 'type2' (default "leg"): Type of the second value. Same possible options as 'type1'.

2. Usage:
   - Call the 'triangle' function with parameters to compute the sides and angles of the triangle based on the provided parameters.
    Example triangle(3, "leg", 5, "hypotenuse");
   - Ensure you specify valid types and values. See below for a list of acceptable types and conditions.
   - The function will return the computation results to the console if successful. If it fails to find a triangle with the provided parameters, the function will return the appropriate error message.

3. Parameters:
   - Parameters 'val1' and 'val2' must be positive numbers.
   - Parameters 'type1' and 'type2' must be one of the following: "leg", "hypotenuse", "adjacent angle", "opposite angle", "angle".
   - Invalid combinations of 'type1' and 'type2':
     - Two "hypotenuse" parameters or two "angle" parameters.
     - Combination of "adjacent angle" with "opposite angle".
   - All triangle angles must be acute (less than 90 degrees).
   - The sum of any two sides of the triangle must always be greater than the third side.

4. Return result:
   - In case of successful triangle computation, the function will return "success" and display the results in the console (triangle sides and angles).
   - If it's impossible to find a triangle with the provided parameters or in case of invalid input data, the function will return the appropriate error message and "failed".`);
