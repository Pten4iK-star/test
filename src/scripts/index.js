import "../styles/index.scss";

const user = {
  name: "Natalia",
  lastName: "Tsybenko",
  age: 34,
  dateOfBirth: "07.09.1985",
  height: 170,
  hasAnimal: true,
  notHasAnimal: false,

  getInformation: function() {
    console.log(this.name + this.lastName + this.dateOfBirth);
  }
};
console.log(user.height);
console.log(user.notHasAnimal);
console.log(user.hasAnimal);
user.getInformation();

const user2 = {
  sweets: "ice cream",
  candy: "chocolate",
  cake: "biscuit"
};
const user3 = {
  first: "soup",
  fixings: "pasta",
  entree: "fish"
};

const myFavFoods = [user2, user3];
console.log(typeof myFavFoods);
console.log(myFavFoods[0].sweets);
console.log(myFavFoods[1].fixings);
console.log(myFavFoods[0]);
console.log(myFavFoods[1]);

console.log("--------------------------");
const a = 7;
const b = 9;
const sum = a + b;
console.log(sum);
console.log("const", a - b, a * b, a / b);
