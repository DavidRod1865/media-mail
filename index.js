const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const path = require('path')
const ejs = require('ejs')

// Express Middleware
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));


// Send Index.html to Server
app.get('/', (req, res) => {
    res.render("index.ejs")
})

//Grab API Data
app.get('/mediaMail/:weight', (req, res) => {
    res.sendFile(mediaMail[req.params.weight])
})


//Activates Server
app.listen(PORT, (res, req) => {
    console.log(`Database running on ${PORT}`)
})