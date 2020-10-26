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

var total_amount;
var things = [];
var date;
var total_expenses;

var total_amount_person;
var things = [];
var date;
var total_wasoli;
var categories_;
exports.home = async function (req, res) {
    date = helper_date.date_funct();//this function gives date
    var buff = fs.readFileSync('a.log', 'utf8');///file reader.

    await model.amounts.findAll({
        attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'total']]
    }).then((data) => {
        total_amount = data;

        var row_amount = JSON.stringify(total_amount[0])
        var parse_amount = JSON.parse(row_amount);
        total_expenses = parse_amount.total;
        // console.log(value)
    });

    await model.person_amounts.findAll({
        attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'total']]
    }).then((data) => {
        total_amount_person = data;

        var row_amount = JSON.stringify(total_amount_person[0])
        var parse_amount = JSON.parse(row_amount);
        total_wasoli = parse_amount.total;
        // console.log(value)
    });


    await model.category.findAll({
        attributes: ['id', 'categories']
    }).then((data) => {
         var categories=data;

         var row_category = JSON.stringify(categories)
         var parse_category = JSON.parse(row_category);
         //categories_.push(parse_category);
         categories_ = parse_category;

    });

     console.log(categories_[1].categories)

    db_restult ={};
    res.render('home', { buff, total_expenses, date,total_wasoli ,categories_,db_restult})

}

