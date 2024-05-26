const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('./public/scripts/config')
const { verify } = require('crypto')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.all('/user', (req, res, next) => {
    console.log('Paso por aqui')
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/clients', (req, res) => {
    res.sendFile(__dirname + '/public/clients.html')
})

app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/public/team.html')
})

app.get('/calendar', (req, res) => {
    res.sendFile(__dirname + '/public/calendar.html')
})

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/public/profile.html')
})

app.get('/mailbox', (req, res) => {
    res.sendFile(__dirname + '/public/mailbox.html')
})

app.use(express.static('public'))

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
})