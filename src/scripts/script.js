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
