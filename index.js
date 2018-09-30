const mongoose = require('mongoose');
const express = require('express');
const app = express();



let apiName = ""; // Pull from DSL
let dbName = "mongodb://adilimtiaz:password123@ds111963.mlab.com:11963/emaily-dev"; // Pull from DSL
let schemaDef = {}; // Pull from DSL

// connect to DB
mongoose.connect(dbName);


// Create Schema

const API = mongoose.model(apiName,schemaDef);


// READ ENDPOINT
app.get(`/${apiName}`, function (req, res) {

    // Read from Mongo DB
    API.find((err, data) => {
        if (err) console.log(err);
        console.log(data);
        res.send(data);
    })
});


// CREATE ENDPOINT
app.post(`/${apiName}`, (req, res) => {
    const data  = req.body;

    // Push data to MongoDB
    API.create(data).then((err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send("Success");
    })

});


app.listen(5000, () => {
    console.log("App is listening on Port 5000");
})

