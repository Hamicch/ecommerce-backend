const express = require('express')

// Middleware 
const bodyParser = require('body-parser')

// const userData = require('./user')

const app = express();

var jsonParser = bodyParser.json()

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//  Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// app.get('/users', jsonParser, (req, res) => {

//         res.json(userData)
// })


// Listening to port for requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
        console.log(`Server successfully running on ${port}`);
})