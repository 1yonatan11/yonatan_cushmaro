const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const createDB = require('./CreateDB_Crouddb');
const cookie = require('cookie-parser');
const sql = require("./db/db");
const port = 2023;
app.use(express.static(path.join(__dirname,"static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routing
app.get('/', (req,res) =>{
    res.send("Hi DB");
});

//create DB
app.get('/createTable', createDB.createTable);

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
})