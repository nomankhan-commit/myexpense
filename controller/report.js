

const express = require('express');
var fs = require('fs');
const model = require('../models');
var Promise = require('promise');
const sequelize = require('sequelize');
const Op = sequelize.Op;
var helper_date = require('../helper/date')
//var helper_Total_amount = require('../helper/total_expenses___')



//var date;
var db_restult = [];
var total_expenses;

var total_amount_person;
var things = [];
var date;
var total_wasoli;
var categories_;
exports.report_Function = async function (req, res) {
    date = helper_date.date_funct();//this function gives date



    await model.amounts.findAll({//sum from amounts table
        attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'total']]
    }).then((data) => {
        total_amount = data;

        var row_amount = JSON.stringify(total_amount[0])
        var parse_amount = JSON.parse(row_amount);
        total_expenses = parse_amount.total;
        // console.log(value)
    });


    await model.person_amounts.findAll({//sum from person amount table
        attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'total']]
    }).then((data) => {
        total_amount_person = data;

        var row_amount = JSON.stringify(total_amount_person[0])
        var parse_amount = JSON.parse(row_amount);
        total_wasoli = parse_amount.total;
        // console.log(value)
    });



    await model.sequelize.query("SELECT amounts.id,amounts.thing_id as thing_id, amounts.description,allthings.things,amounts.amount ,amounts.createdAt,amounts.id as amount_id FROM amounts ,allthings WHERE amounts.thing_id = allthings.id", { type: sequelize.QueryTypes.SELECT })
        .then(data => {

            db_restult = data;

        });

    await model.category.findAll({
        attributes: ['id', 'categories']
    }).then((data) => {
        var categories = data;

        var row_category = JSON.stringify(categories)
        var parse_category = JSON.parse(row_category);
        //categories_.push(parse_category);
        categories_ = parse_category;

    });


    console.log('noman',db_restult)
    res.render('report', { db_restult, total_expenses, date, total_wasoli, categories_ });

}





