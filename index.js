const express = require('express');
const ejs = require('ejs');
const mysql2 = require('mysql2');
const path = require('path');
const sequelize = require('sequelize');
var app = express();
var fs = require('fs');
var fse = require('fs-extra');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mainRoutes = require('./routes/main');


const port = 4000;


app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views/pages'));
app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var accessLogStream = fs.createWriteStream('access.log', { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream })) 



app.use('/', mainRoutes)


app.listen(port, () => {
    console.log(`server has been started:${port}`)
})