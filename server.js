const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.argv[2] || 3000
const router = require("./router")

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.get('/', (req, res) => res.send('welcome to the world of web server'))
 
app.use('/api/users', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))