var saying = "Home Sweet Home";

var msg = '<h2>length</h2><p>' + saying.length + '</p>';
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>character index</h2><p>' + saying.toUpperCase().charAt(7) + '<p>';
msg += '<h2>first me</h2><p>' + saying.indexOf('me') + '</p>'; 
msg += '<h2>last o</h2><p>' + saying.lastIndexOf('o') + '</p>';
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';




var el = document.getElementById('info');
el.innerHTML = msg;