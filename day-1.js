let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("How old are you?");
  playerOne.hiScore = prompt("When is your birthday?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.


  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your favorite color?");
  customer.address = prompt("What is your phone number?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};
  pet.creature = prompt("What kind of pet do you have?");
  pet.time = prompt("How long have you had it?");

  // Try it!
  // TODO: create a prompt to ask about a pet

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Wow! thats amazing!`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("Hey! Hey!");
  console.log("How's it hanging?!");
}

part4.onclick = day1Part4;