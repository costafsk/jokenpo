const app = require('./../config/config');

const server = app.listen(8080, () => console.log('Server is Running Bro ;)'));

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {
    console.log('entrou');
    socket.on('disconnect', () => {
        console.log('saiu!');
    });
});