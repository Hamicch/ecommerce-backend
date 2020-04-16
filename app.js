const express = require('express')

// Middleware 
const bodyParser = require('body-parser')

const userData = require('./user')

const app = express();

var jsonParser = bodyParser.json()

app.get('/users', jsonParser, (req, res) => {

        res.send(userData)
})


// Listening to port
const port = process.env.PORT || 8000;
app.listen(port, () => {
        console.log(`Server successfully running on ${port}`);
})