var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => res.send('hello!'));
app.get('/my-name', (req, res) => res.send('nag!!'));

// Establishing socket connections
io.on('connection', (socket) => {
    
    console.log('a user connected');
    socket.on('message', (msg)=>{
      console.log(msg);
      socket.broadcast.emit('message-boardcast', msg);
    });
  });

  http.listen(9010, () => {
  console.log('listening on :9010');
});