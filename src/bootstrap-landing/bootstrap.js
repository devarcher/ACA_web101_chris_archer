

function setRotateWord() {
  var wordList = new Array ("dog.", "owner.", "neighbor.", "friend.", "family.", "vet.", "granparent.", "party.");
  var random = Math.floor(Math.random()*wordList.length);
  $("#rotate").text(wordList[random]);
  console.log(random)
}

setInterval(setRotateWord, 500);