// In HTML 
// 2 button to change mark to 'O' or 'X'
// Create 3 x 3 grid

// In JS 
//onClick insert 'O' or 'X' depending on previous click

// var player1, var player2, var previousClick

var boxClass = document.querySelector(".box");
var allBoxes = document.querySelectorAll(".box");
var mark = "O";

function switchPlayer() {
  if (mark == "O") {
    mark = "X";
  } else {
    mark = "O";
  }
  console.log("mark", mark)
}

console.log("allBoxes", allBoxes);
allBoxes[0].onclick = function setXO(event) {
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[1].onclick = function setXO(event) {
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[2].onclick = function setXO(event) {
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[3].onclick = function setXO(event) {
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[4].onclick = function setXO(event) {
  console.log('clickedMeO!');
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[5].onclick = function setXO(event) {
  console.log('clickedMeO!');
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[6].onclick = function setXO(event) {
  console.log('clickedMeO!');
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[7].onclick = function setXO(event) {
  console.log('clickedMeO!');
  event.target.innerText = mark;
  switchPlayer();
}   

allBoxes[8].onclick = function setXO(event) {
  console.log('clickedMeO!');
  event.target.innerText = mark;
  switchPlayer();
}   

