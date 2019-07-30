

function setRotateWord() {
  var wordList = new Array ("dog.", "owner.", "partner.", "community.", "park.", "baby.", "neighbor.", "friend.", "family.", "vet.", "grandparent.", "party.");
  var random = Math.floor(Math.random()*wordList.length);
  $("#rotate").text(wordList[random]);
  console.log(random)
}

setInterval(setRotateWord, 500);