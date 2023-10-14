const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})
app.get("/", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            res.send(response.data)
        })
        .catch(err => res.send(new Error("Error fetching data")))

});
app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});
