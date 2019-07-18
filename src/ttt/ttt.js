// In HTML 
// 2 button to change mark to 'O' or 'X'
// Create 3 x 3 grid

// In JS 
//onClick insert 'O' or 'X' depending on previous click

// var player1, var player2, var previousClick

var boxClass = document.querySelector(".box");
var allBoxes = document.querySelectorAll(".box");
console.log("allBoxes", allBoxes);
boxClass.onclick = function setXO() {
  console.log('clickedMe!'),
  event.target.innerText = "O";
}

var boxOne = document.querySelector(".box1");
boxOne.onclick = function setXO() {
  event.target.innerText = "X";
}






