import "../styles/index.scss";

const user = {
  name: "Natalia",
  lastName: "Tsybenko",
  age: 34,
  dateOfBirth: "07.09.1985",
  hight: 170,
  information: function() {
    console.log("Natalia+Tsybenko+07.09.1985");
  }
};
const HasAnymal = true;
const notHasAnymal = false;
console.log(typeof user);
console.log(typeof HasAnymal);
console.log(typeof notHasAnymal);
const FevFood = {
  sweeds: "ice cream",
  candy: "chocolate",
  cake: "biscuit"
};
const FevFood2 = {
  first: "soup",
  fixings: "pasta",
  entree: "fish"
};

const myFevFoods = [FevFood, FevFood2];
console.log(typeof myFevFoods);
console.log(myFevFoods[0]);
console.log(myFevFoods[1]);
user.information();

console.log("--------------------------");
const a = 7;
const b = 9;
const sum = a + b;
console.log(sum);
console.log("const", a - b, a * b, a / b);
