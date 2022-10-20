const express = require('express')
const app = express()
const port = 3000

const qrcode = require('qrcode-terminal')

const { Client, LocalAuth } = require('whatsapp-web.js')

const client = new Client({
    authStrategy: new LocalAuth()
})

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true})
    console.log('QR RECEIVED', qr)
})

client.on('ready', () => {
    console.log('Client is ready!')
})

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
})

client.initialize();

app.get('/', (req, res) => {
    res.send('whatsapp-web.js')
})

app.get('/sendMessage', async (req, res) => {
    let message = '';

    if (req.query.message) {
        message = req.query.message
    }
    
    const number = req.query.number
    const sanitized_number = number.toString().replace(/[- )(]/g, "") // remove unnecessary chars from the number
    const final_number = number; // add 91 before the number here 91 is country code of India

    const number_details = await client.getNumberId(final_number) // get mobile number details

    if (number_details) {
        const sendMessageData = await client.sendMessage(number_details._serialized, message) // send message
        console.log('messagedata', sendMessageData)
    } else {
        console.log(final_number, "Mobile number is not registered");
    }


    res.send(`Message sent successfully to +${number} with message: ${message}`)
})

app.get('/getChats', async (req, res) => {
    const chats = await client.getChats()
    res.json(chats)
})

app.get('/getContacts', async (req, res) => {
    const chats = await client.getContacts()
    res.json(chats)
})

app.get('/getNumberId', async (req, res) => {
    const number = req.query.number

    const number_details = await client.getNumberId(number)

    res.json(number_details)
})

app.get('/getChatById', async (req, res) => {
    const id = req.query.id

    const chat = await client.getChatById(id)

    res.json(chat)
})

app.get('/getProfilePicUrl', async (req, res) => {
    const id = req.query.id

    const url = await contact.getProfilePicUrl(id)

    res.json(url)
})

app.listen(port, () => {    
    console.log(`Server listening on port ${port}`)
})