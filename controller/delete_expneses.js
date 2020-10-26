

const express = require('express');
var fs = require('fs');
const model = require('../models');
var Promise = require('promise');
const sequelize = require('sequelize');
const Op = sequelize.Op;
var helper_date = require('../helper/date')


exports.delete_expneses = async function (req, res) {
    var id_ = req.params.id;

   await model.amounts.destroy({
        where: {
            id: id_ //this will be your id that you want to delete
        }
    }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
            console.log('Deleted successfully');
        }
    }, function (err) {
        console.log(err);
    });


   await model.amounts.findAll({
        //attributes: ['foo', 'bar']
    }).then(data => {

        var a = JSON.stringify(data)
        console.log(a)
    });



}





