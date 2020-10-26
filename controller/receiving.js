

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


    await model.sequelize.query("SELECT people.id,people.person_name , person_amounts.amount ,person_amounts.description ,person_amounts.createdAt,person_amounts.id as amount_id FROM people ,person_amounts WHERE people.id = person_amounts.person_id")
    .then(data => {

            db_restult = data;

            res.jsonp({db_restult});
        });



}





