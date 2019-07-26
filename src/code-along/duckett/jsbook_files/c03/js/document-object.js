var msg = '<p><b>page title: </b>' + document.title + '<br/>';
msg += '<b><p>page address: </b>' + document.URL + '<br />';
msg += '<b><p>last modified: </b>' + document.lastModified + '<br />';

var footElement = document.getElementById('footer');
footElement.innerHTML = msg;