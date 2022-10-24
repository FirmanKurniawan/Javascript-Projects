const app = require('express')();
const server  = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
    console.log('Socket: ', socket);
    console.log('Socket is active to be connected');

    socket.on('chat', (payload) => {
        console.log('Payload: ', payload);

        io.emit('chat', payload);
    });

});

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
