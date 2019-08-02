/* Functional Random Function 
function setRotateWord() {
  var wordList = new Array ("dog.", "owner.", "partner.", "community.", "park.", "baby.", "neighbor.", "friend.", "family.", "vet.", "grandparent.", "party.");
  var random = Math.floor(Math.random()*wordList.length);
  $("#rotate").text(wordList[random]);
  console.log(random)
}

setInterval(setRotateWord, 500);
*/

// Non-Random Rotate Function
var arr = new Array ("dog.", "owner.", "partner.", "community.", "park.", "baby.", "neighbor.", "friend.", "family.", "vet.", "grandparent.", "party.", "life.");

var i = 0;
var interval;

function nextItem() {
  if (i + 1 < arr.length) {
    i +=1;
  } else {
    i = 12;
    clearInterval(interval);
  }
  document.getElementById('rotate').textContent = arr[i];
}

interval = setInterval(nextItem, 300);
  document.getElementById('rotate').textContent = arr[i];
