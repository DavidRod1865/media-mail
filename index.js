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
    res.render("index.ejs", {})
})

// Import form other JS Files
// import {fetchWeight} from './public/js/main.js'

async function getWeight(weight){
    await fetch(`https://media-mail-api.vercel.app/api/weight/${weight}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(typeof data)
            return data
        })
        .catch(error => {
            if (error.res) {
                console.log(error.res.data)
                console.log(error.res.status)
                console.log(error.res.headers)
            }
        })
    }

//Grab API Data
app.get('/package', (req, res) => {
    const weight = req.body.packageWeight
    const value = req.body.packageValue
    // const weight = Number(req.params.weight)
    // console.log(weight)
    // let value = getWeight(weight)

    res.redirect('/')
})

//Activates Server
app.listen(PORT, (res, req) => {
    console.log(`Database running on ${PORT}`)
})