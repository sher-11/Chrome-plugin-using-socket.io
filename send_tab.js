	var checkIfButton = document.getElementById('send');
    checkIfButton.addEventListener('click', function() {
  	var message = document.getElementById('textfield').value;
	document.getElementById('textfield').value = '';
	var store;
	var socket = io.connect('http://localhost:3000');
        socket.emit('message',message);

        socket.on('respond', function(message) {
        store = message;
        })
		  var node = document.createElement("LI");
		  var textnode = document.createTextNode(message);
		  node.appendChild(textnode);
		  document.getElementById("myList").appendChild(node);
    });

