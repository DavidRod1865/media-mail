const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const path = require('path')
const ejs = require('ejs')
const main = require('./public/js/main.js')

import { packages } from './public/js/main.js'

// Express Middleware
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));

// Send Index.html to Server
app.get('/', (req, res) => {
    console.log(packages)
    res.render("index.ejs")
})

//Grab API Data
app.post('/mediaMail/:weight', (req, res) => {
    console.log(packages[2])
    res.redirect('/')
})


//Activates Server
app.listen(PORT, (res, req) => {
    console.log(`Database running on ${PORT}`)
})