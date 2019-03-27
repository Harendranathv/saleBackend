const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const app = express();
app
  .use(cors())
  .use(bodyParser())
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'HTML', 'dist')))
  .set('views', path.join(__dirname, 'views'))
  .set('views', path.join(__dirname, 'HTML', 'dist'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.redirect('/index.html');
  })
  .get('/enter-new-product', (req, res) => res.render('pages/index'))
  .listen(PORT, () => {
    // import Router
    require('./lib/database');  // connect DB

    fs.readdirSync(path.join(__dirname, './routes')).map(file => {
      require('./routes/' + file)(app);
    });
    console.log('Listening to Port: ', PORT);
  })

//
// const portSocket = process.env.PORT || 8080,
//     ip = process.env.IP || '127.0.0.1',
//
//     server = http.createServer().listen(portSocket, ip, function () {
//         console.log('Socket.IO server started at %s:%s!', ip, portSocket);
//     });
//
// const io = socketIO.listen(server);
// io.set('match origin protocol', true);
// io.set('origins', '*:*');
// var run = function (socket) {
//     // Socket process here!!!
//     socket.emit('greeting', 'Hello from Socket.IO server');
// }
// var send = function (data) {
//     // Socket process here!!!
//     socket.emit('greeting', 'You sent' + data);
// }
//
// io.sockets.on('connection', run);
// io.sockets.on('send', send);
