

const express = require('express');
var fs = require('fs');
const model = require('../models');
var Promise = require('promise');
const sequelize = require('sequelize');
const Op = sequelize.Op;
var helper_date = require('../helper/date')
//var helper_Total_amount = require('../helper/total_expenses___')



var date;
var db_restult = [];
var total_expenses;

var total_amount_person;
var things = [];
var date;
var total_wasoli;

exports.report_Function = async function (req, res) {
    date = helper_date.date_funct();//this function gives date

    
    await model.sequelize.query("SELECT amounts.id,amounts.thing_id as thing_id, amounts.description,allthings.things,amounts.amount ,amounts.createdAt,amounts.id as amount_id FROM amounts ,allthings WHERE amounts.thing_id = allthings.id", { type: sequelize.QueryTypes.SELECT })
        .then(data => {

            db_restult = data;
            res.jsonp({db_restult});
        });


}





