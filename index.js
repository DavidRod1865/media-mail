const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')

// Express Middleware
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Send Index.html to Server
app.get('/', (req, res) => {
    res.render("index.ejs", {

    })
})



//Grab API Data
app.post('/mediaMail/:weight', (req, res) => {

    res.redirect('/')
})


//Activates Server
app.listen(PORT, (res, req) => {
    console.log(`Database running on ${PORT}`)
})