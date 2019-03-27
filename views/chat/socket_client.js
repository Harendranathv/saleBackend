$(document).ready(function(){
    var chat = document.querySelector('.chat');
    var content = document.querySelector('.content');
    var socket = io.connect('http://127.0.0.1:8080');
    socket.on('greeting', function(data){
        content.innerHTML += data;
    });
    window.send = function() {

        socket.emit('send', chat.value);
    }
})

