//1.2.3
let car1 = new Object();
car1.color = "violet";
car1.maxSpeed = 150;
car1.driver = new Object();
car1.driver.name = "Victoria Babala";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;
//1.2.4
let car2 = {
  color: "navy blue",
  maxSpeed: 280,
  driver: {
    name: "Victoria Babala",
    category: "B",
    "personal limitations": null,
  },
  tuning: false,
  "number of accidents": 2,
};
//1.2.5
car1.drive = function () {
  console.log("I am not driving at night");
};
console.log("Demostration of car1.drive() work:");
car1.drive();
//1.2.6
car2.drive = function () {
  console.log("I can drive anytime");
};
console.log("Demostration of car2.drive() work:");
car2.drive();
//1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
  //1.2.9
  this.trip = function () {
    if (!this.hasOwnProperty("driver")) {
      console.log("No driver assigned");
    } else {
      let message = "Driver " + this.driver.name;
      if (this.driver.nightDriving) {
        message += " drives at night";
      } else {
        message += " does not drive at night";
      }
      message += " and has " + this.driver.experience + " years of experience";
      console.log(message);
    }
  };
};
//1.2.8
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience,
  };
};
//1.2.10
let Truck1 = new Truck("blue", 5000, 60, "Volvo", "VNL");
Truck1.AssignDriver("Victoria Babala", true, 4);
let Truck2 = new Truck("red", 6000, 70, "Mercedes", "Actros");
Truck2.AssignDriver("Victoria Babala", false, 2);

console.log("Demostration of Truck1.drive() work:");
Truck1.trip();
console.log("Demostration of Truck2.drive() work:");
Truck2.trip();

//1.2.12
class Square {
  //1.2.13
  constructor(a) {
    this.a = a;
  }
  //1.2.14
  static help() {
    console.log(
      "A square is a geometric figure with four equal sides and four equal angles." +
        "\n" +
        "Properties of a square:" +
        "\n" +
        "- All sides are equal in length." +
        "\n" +
        "- Opposite sides are parallel." +
        "\n" +
        "- All angles are right angles (90 degrees)."
    );
  }
  //1.2.15
  length() {
    console.log("Perimeter of a square = ", 4 * this.a);
  }

  square() {
    console.log("Area of the square = ", this.a * this.a);
  }

  info() {
    console.log(
      "Square Information:",
      "\n",
      "- Side lengths = ",
      this.a,
      "\n",
      "- All angles = 90 degrees",
      "\n",
      "- Sum of all sides = ",
      4 * this.a,
      "\n",
      "- Area = ",
      this.a * this.a
    );
  }
}

//1.2.16
class Rectangle extends Square {
  //1.2.17
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  static help() {
    console.log(
      "Rectangle is a geometrical figure with four sides and four right angles, opposite sides are equal.",
      "\n",
      "Properties of Rectangle:",
      "\n",
      "- Length of rectangle (a)",
      "\n",
      "- Width of rectangle (b)"
    );
  }
  length() {
    console.log("Perimeter of a rectangle = ", 2 * (this.a + this.b));
  }

  square() {
    console.log("Area of the rectangle = ", this.a * this.b);
  }
  info() {
    console.log(
      "Rectangle Information:",
      "\n",
      "- Length =",
      this.a,
      "\n",
      "- Width:",
      this.b,
      "\n",
      "- All angles = 90 degrees",
      "\n",
      "- Sum of all sides = ",
      2 * (this.a + this.b),
      "\n",
      "- Area =",
      this.a * this.b
    );
  }
}
//1.2.18
class Rhombus extends Square {
  //1.2.19
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }
  //1.2.22
  get a() {
    return super.a;
  }
  set a(p) {
    super.a = p;
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(alpha) {
    this._alpha = alpha;
  }
  get beta() {
    return this._beta;
  }
  set beta(beta) {
    this._beta = beta;
  }
  static help() {
    console.log(
      "Rhombus is a geometrical figure with all sides equal and opposite angles equal.",
      "\n",
      "Properties of Rhombus:",
      "\n",
      "- Side length (a)",
      "\n",
      "- Measure of obtuse angle (alpha)",
      "\n",
      "- Measure of acute angle (beta)"
    );
  }
  length() {
    console.log("Perimeter of a rhombus = ", 4 * this.a);
  }
  square() {
    console.log(
      "Area of the rhombus = ",
      this.a * this.a * Math.sin((this.alpha * Math.PI) / 180)
    );
  }
  info() {
    console.log(
      "Rhombus Information:",
      "\n",
      "- Side length = ",
      this.a,
      "\n",
      "- Measure of obtuse angle = ",
      this.alpha,
      "degrees",
      "\n",
      "- Measure of acute angle = ",
      this.beta,
      "degrees",
      "\n",
      "- Sum of all sides = ",
      4 * this.a,
      "\n",
      "- Area = ",
      this.a * this.a * Math.sin((this.alpha * Math.PI) / 180)
    );
  }
}

//1.2.20
class Parallelogram extends Rectangle {
  //1.2.21
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }
  static help() {
    console.log(
      "Parallelogram is a quadrilateral with opposite sides parallel.",
      "\n",
      "Properties of Parallelogram:",
      "\n",
      "- Length of parallelogram (a)",
      "\n",
      "- Width of parallelogram (b)",
      "\n",
      "- Measure of obtuse angle (alpha)",
      "\n",
      "- Measure of acute angle (beta)"
    );
  }
  length() {
    console.log("Perimeter of parallelogram = ", 2 * (this.a + this.b));
  }
  square() {
    console.log(
      "Area of the parallelogram = ",
      this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)
    );
  }

  info() {
    console.log(
      "Parallelogram Information:",
      "\n",
      "- Length = ",
      this.a,
      "\n",
      "- Width = ",
      this.b,
      "\n",
      "- Measure of obtuse angle = ",
      this.alpha,
      "degrees",
      "\n",
      "- Measure of acute angle = ",
      this.beta,
      "degrees",
      "\n",
      "- Sum of all sides = ",
      2 * (this.a + this.b),
      "\n",
      "- Area =",
      this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)
    );
  }
}
//1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

//1.2.24
const squareObj = new Square(5);
const rectangleObj = new Rectangle(6, 10);
const rhombusObj = new Rhombus(5, 110, 70);
const parallelogramObj = new Parallelogram(7, 8, 100, 80);
squareObj.info();
rectangleObj.info();
rhombusObj.info();
parallelogramObj.info();
//1.2.25
function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
};
//1.2.26
const triangle1 = Triangular();
console.log(triangle1);
const triangle2 = Triangular(5, 6, 7);
console.log(triangle2);
const triangle3 = Triangular(11, 6, 4);
console.log(triangle3);

//1.2.27
function PiMultiplier(number) {
  return function () {
    return number * Math.PI;
  };
};
//1.2.28
const doublePi = PiMultiplier(2);
console.log("2*pi result = ", doublePi());
const Pi2_3 = PiMultiplier(2 / 3);
console.log("(2/3)*pi result = ", Pi2_3());
const halfPi = PiMultiplier(1 / 2);
console.log("pi/2 result = ", halfPi());

//1.2.29
function Painter(color) {
  return function (object) {
    if (object.hasOwnProperty("type")) {
      console.log(
        "Painting object with type " + object.type + " in " + color + " color"
      );
    } else {
      console.log("No 'type' property occurred!");
    }
  };
};
//1.2.30
const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");
//1.2.31
const obj1 = {
  maxSpeed: 280,
  type: "Sportcar",
  color: "magenta",
};
console.log("     Painting obj1");
PaintBlue(obj1);
PaintRed(obj1);
PaintYellow(obj1);

const obj2 = {
  type: "Truck",
  avgSpeed: 90,
  loadCapacity: 2400,
};
console.log("     Painting obj2");
PaintBlue(obj2);
PaintRed(obj2);
PaintYellow(obj2);

const obj3 = {
  maxSpeed: 180,
  color: "purple",
  isCar: true,
};
console.log("     Painting obj3");
PaintBlue(obj3);
PaintRed(obj3);
PaintYellow(obj3);
