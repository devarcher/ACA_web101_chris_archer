// Create a variable called msg to hold a message that will be shown on the page
// Find the width of the browser window, and put this in the msg variable
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
// Find the height of the window and add it to the msg variable
msg += '<p>height: ' + window.innerHeight + '</p>';

msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';

msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + ' Cat is cool' + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;