const fs = require('fs')
const https = require('https')
const express = require('express')

const key = fs.readFileSync('./cert.key')
const cert = fs.readFileSync('./cert.crt')
const app = express()
const secureExpress = https.createServer({ key, cert }, app)

app.use(express.static('public')) //serve our files in public statically
secureExpress.listen(5000, () => {
    console.log('HTTPS Server is running at http://localhost:5000');
});