const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const path = require('path')

app.use(express.static(path.join(__dirname, "public")));

//Send Index.html to Server
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

//Activates Server
app.listen(PORT, (res, req) => {
    console.log(`Database running on ${PORT}`)
})