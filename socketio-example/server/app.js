const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "PUT", "POST", "DELETE", "HEAD", "OPTIONS"],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
        credentials: true
    },
    allowEIO3: true
});

io.on('connection', (socket) => {
    console.log('socket is running')
    socket.on('test', (data) => {
        console.log(data)
        socket.emit('testclient', {
            ok:2
        })
    })
})

app.get('/test', (req, res) => {
    socket.emit('test', {
        ok: 1x
    })
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})