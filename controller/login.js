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
var roles = {};
var roles_aray = [];
var role_array = {};
var db_restult = {};
var total_expenses = {};
var date, total_wasoli = {};
var categories_ = {};
var login_fail = {};
exports.login_function = async function (req, res) {

    var form_data = req.body;



    await model.users.findOne({
        where: { email: form_data.email, password: form_data.password },
    }).then((data) => {
        db_restult = data;
    })

    if (db_restult != null) {
        res.redirect('/home');

    }

    if (db_restult == null) {
        login_fail = "email or password may entered wrong."
     res.redirect('/signUp');
    }


}
// res.redirect('/home');





