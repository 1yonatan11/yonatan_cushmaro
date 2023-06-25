const mysql = require('mysql2');
const SQL = require('./db');

const createTable = (req,res)=>{
    const Q1 = "CREATE TABLE usersAA (id INT PRIMARY KEY, name Varchar(225), password Varchar(225));";
    SQL.query()
    };


module.exports = {createTable};