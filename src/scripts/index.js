import "../styles/index.scss";
import "./events";
const user = {
  name: "Natalia",
  lastName: "Tsybenko",
  age: 34,
  dateOfBirth: "07.09.1985",
  height: 170,
  hasAnimal: true,
  notHasAnimal: false,
  favoriteFood: ["pasta", "ice cream", "chocolate"],
  getInformation: function() {
    console.log(this.name + "  " + this.lastName + "  " + this.dateOfBirth);
  }
};
console.log(user.height);
console.log(user.notHasAnimal);
console.log(user.hasAnimal);
user.getInformation();
console.log(user.favoriteFood);

console.log("--------------------------");
const a = 7;
const b = 9;
const sum = a + b;
console.log(sum);
console.log("const", a - b, a * b, a / b);
