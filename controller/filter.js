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
var db_restult = [];

exports.filter = async function (req, res) {
   var filter_param = req.params.category;

   console.log("filter_param", filter_param)
   await model.sequelize.query(`SELECT amounts.id,amounts.thing_id as thing_id, amounts.description,allthings.things,amounts.amount ,amounts.createdAt,amounts.id as amount_id FROM amounts ,allthings WHERE amounts.thing_id = allthings.id AND amounts.category_id =${filter_param}`, { type: sequelize.QueryTypes.SELECT })
      .then(data => {
         
         res.jsonp({data});

      });




}

