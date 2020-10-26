const express = require('express');
var fs = require('fs');
const model = require('../models');
var Promise = require('promise');


var description_array = [];
var Single_Array = [];
var amoutn_array = [];
var db_restult = [];
exports.Read_write_person = async function (req, res) {
    var a;
    var a3;
    var thing1 = req.body;

    var readAll = fs.readFileSync('a.log', 'utf8');//read file from a.log.
    var amount1 = thing1.amount;
    var a1 = thing1.person_name;
    var des=thing1.description;
    Single_Array.push(a1)//if single value in text filed it will convert it into an array.
    amoutn_array.push(amount1);
    description_array.push(des);

    console.log('a1', a1, 'amount', amount1)
    
    var type = typeof a1;
    var amount_type = typeof amount1;
    var des_type = typeof des;

    amount_type == 'object' ? amount1 = thing1.amount : amount1 = amoutn_array;////most important line
    des_type == 'object' ? des=thing1.description : des = description_array;////most important line
    type == 'object' ? a1 = thing1.person_name : a1 = Single_Array;////most important line


    console.log('amount type', amount_type, "amount1", thing1.amount)

    console.log('a1 after----' + a1);
    ////////
    for (let name of a1)
        await model.person.findOne({
            where: { person_name: name },
        }).then((data) => {

            db_restult.push(data);

        });


    for (var i = 0; i < db_restult.length; i++) {
        //data.dataValues.things

        if (db_restult[i] == null) {


            await model.person.create({
                person_name: a1[i],
                //description:des[i],
                createdAt: new Date(),
                updatedAt: new Date(),
            }).catch((err) => {
                console.log(err)
            })


            await model.person.findOne({
                where: { person_name: a1[i] },
            }).then((data) => {
                a = data;

            }).catch((err) => {
                console.log(err)
            })


            await model.person_amounts.create({
                person_id: a.dataValues.id,
                amount: amount1[i],
                description :des[i],
                createdAt: new Date(),
                updatedAt: new Date(),
            }).catch((err) => {
                console.log(err)
            })
        }//if
        else {
            await model.person.findOne({
                where: { person_name: a1[i] },
            }).then((data) => {
                a3 = data;

            })

            await model.person_amounts.create({
                person_id: a3.dataValues.id,
                amount: amount1[i],
                description :des[i],
                createdAt: new Date(),
                updatedAt: new Date(),
            }).catch(err => {
                console.log(err);
            });

        }// else

    }//loop i 



    var a2 = a1.join();//convert array into comma seprated string.

    var writeAll = readAll + "," + a2;
    var strVale1 = writeAll
    var strArr1 = strVale1.split(',');
    var intArr1 = [];
    for (j = 0; j < strArr1.length; j++)
        intArr1.push((strArr1[j]));
    fs.writeFileSync('a.log', intArr1);


    res.redirect('/home');

}





