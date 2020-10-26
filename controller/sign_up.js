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
var roles={};
var roles_aray =[];
var role_array={};
exports.Sign_up_function = async function (req, res) {
    
    var db_restult = {};
    var total_expenses = {};
    var date, total_wasoli = {};
    var categories_ = {};

    await model.roles.findAll({
        attributes: ['id', 'roles']
      }).then((data)=>{
roles = data;

      });





// console.log(roles.length,'lenght');

for(let a of roles)
roles_aray.push([a.id,a.roles]);

// console.log(roles_aray, 'id')
    res.render('sign_up', { roles,db_restult, total_expenses, date, total_wasoli, categories_ });
    roles_array="";
}






