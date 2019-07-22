var greeting = 'Howdy ';
var userName = 'Molly';
var message = ', please check your order:';

var welcomeMsg = greeting + userName + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var elGreeting = document.getElementById('greeting');
elGreeting.textContent = welcomeMsg;

var elsign = document.getElementById('userSign');
elsign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;