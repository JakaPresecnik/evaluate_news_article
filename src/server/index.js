const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
//ADDED TO MAKE THE JEST PASS!
const regeneratorRuntime = require("regenerator-runtime");
const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

app.use(express.static('./dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//setting up aylien API
const aylien = require("aylien_textapi")

let textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
})

app.post('/test', function (req, res) {
    console.log(req.body)
    textapi.sentiment({
      'text': req.body.formText,
      'url': 'https://api.aylien.com/api/v1'
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }else {
        console.log(error)
      }
    });

})
