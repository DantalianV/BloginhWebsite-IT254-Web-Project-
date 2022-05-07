const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());


const uri = 'mongodb://localhost:27017';
mongoose.connect(uri)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection formed with database successfully");
})

app.listen(port, () => {
    console.log('Server is running on port ', port);
})