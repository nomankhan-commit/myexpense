const express = require('express');
const ejs = require('ejs');
const mysql2 = require('mysql2');
const path = require('path');
const sequelize = require('sequelize');
var app = express();
var fs = require('fs');
var Q = require('q');
var Promise = require('promise');
var fse = require('fs-extra');
var model = require('../models');
var helper_date = require('../helper/date');
//var helper_Total_amount = require('../helper/total_expenses___');






//var date;
var db_restult = [];
var total_expenses;

var total_amount_person;
var things = [];
var date;
var total_wasoli;
var categories_;
var is_email ;
var db_result={};
exports.email_check = async function (req, res) {

    var email_from_ajax = req.params.email;
   
    await model.users.findOne({
        where: { email: email_from_ajax },
    }).then((data) => {
        
            
            db_result = data;
        
    })

    console.log(db_result, 'db_result')
    
    if (db_result!=null) {
        res.jsonp({db_result});
        console.log('true')
    }

    if (db_result==null) {
        res.jsonp({db_result});
        console.log('null');
        console.log("false")
    }
  

}






