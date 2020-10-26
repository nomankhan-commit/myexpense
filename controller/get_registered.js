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
var is_email=false;
exports.get_registered_fun = async function (req, res) {


    var db_restult = {};
    var total_expenses = {};
    var date, total_wasoli = {};
    var categories_ = {};
    var form_data = req.body;

    console.log(form_data)

await model.users

await model.users.findOne({
    where: { email:  form_data.email },
}).then((data) => {
   is_email=true;

})

    await model.users.create({
        f_name:form_data.f_name ,
        l_name: form_data.l_name,
        email: form_data.email,
        gender: form_data.gender,
        roles_id: form_data.roles,
        password: form_data.password,
        createdAt: new Date(),
        updatedAt: new Date(),
    }).then((data) => {
        console.log("user created")
    })

}






