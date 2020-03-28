import "../styles/index.scss";
import "./events";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.js";

// let importantAndUrgent;
// let importantAndNotUrgent;
// let notImportantAndUrgent;
// let notImportantAndNotUrgent;

// (function() {
//   importantAndUrgent = document.getElementById("importantAndUrgent");
//   importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
//   notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
//   notImportantAndNotUrgent = document.getElementById(
//     "notImportantAndNotUrgent"
//   );
// })();

// const quadrants = [
//   importantAndUrgent,
//   importantAndNotUrgent,
//   notImportantAndUrgent,
//   notImportantAndNotUrgent
// ];

// quadrants.forEach(quadrant => {
//   const button = quadrant.getElementsByTagName("button")[0];
//   button.addEventListener("click", () => {
//     addNewTask(quadrant);
//   });
// });

// function addNewTask(quadrant) {
//   const value = getInputValue(quadrant);
//   if (value) {
//     addNewItem(value, quadrant);
//   } else {
//     alert("Please add value to input");
//   }
// }

// function getInputValue(quadrant) {
//   return quadrant.getElementsByClassName("new-task-imput")[0].value;
// }

// function addNewItem(value, quadrant) {
//   const list = quadrant.getElementsByClassName("todoList")[0];
//   const newLi = getLiWithText(value);
//   list.appendChild(newLi);
// }

// function getLiWithText(value) {
//   const newListItem = document.createElement("li");
//   const checkbox = getCheckBox();
//   const text = document.createTextNode(" " + value);
//   const space=document.createTextNode(" " );
//   const icon = getDeleteIcon();
//   newListItem.appendChild(checkbox);
//   newListItem.appendChild(text);
//   newListItem.appendChild(space);
//   newListItem.appendChild(icon);
//   return newListItem;
// }

// function getCheckBox() {
//   const input = document.createElement("input");
//   input.type = "checkbox";
//   return input;
// }

// function getDeleteIcon() {
//   const i = document.createElement("i");
//   i.className = "fas fa-trash";
//   return i;
// }

let randomNumber;
function init() {
  randomNumber = getRandomNumber(10);
  console.log(`Random on init ${randomNumber}`);
  const input = document.getElementById("checkField");
  const checkBtn = document.getElementById("checkBtn");

  checkBtn.addEventListener("click", () => {
    checkNumber(input, randomNumber);
  });
}

function checkNumber(input, number) {
  if (input.value == "") {
    alert("Please add number!");
  } else {
    checkValues(input, number);
  }
}

function checkValues(input, number) {
  const p = document.getElementById("status");
  if (input.value > number) {
    p.innerHTML = "Your number is greather than Random Number!";
    p.className = "wrong";
  } else if (input.value < number) {
    p.innerHTML = "Your number is less than Random Number!";
    p.className = "wrong";
  } else {
    p.innerHTML = `You won!!! I was thinking about ${number}`;
    p.className = "success";
    input.value = "";
    randomNumber = getRandomNumber(10);
    console.log(`New random number ${randomNumber}`);
  }
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}
