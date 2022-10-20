const { io } = require('socket.io-client')

const socket = io('http://localhost:3000')

socket.on('connect', () => {
    console.log('socket ready')
})

socket.on('testclient', (data) => {
    console.log('client testing', data)
})

socket.emit('test', {
    ok:1
})