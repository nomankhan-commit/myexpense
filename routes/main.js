
var express = require('express');
var router = express.Router();



let Read_Write = require('../controller/autoComplete');
let home = require('../controller/home');
let report = require('../controller/report')
let person_auto_submit = require('../controller/person_auto_submit');
let filter = require('../controller/filter');
let receiving_report = require("../controller/receiving");
let expense_report = require("../controller/expense");
let delete_expense = require("../controller/delete_expneses");
let sing_up = require('../controller/sign_up');
let get_registeredd = require('../controller/get_registered');
let email_check= require('../controller/email_check')
let login_user= require('../controller/login')

router.get('/api/report/expenses',report.report_Function);
router.post('/api/report/receiving',receiving_report.report_Function);
router.post('/api/report/expense/on/ajax',expense_report.report_Function);
router.post('/auto', Read_Write.Read_write_autocomplete);
router.get('/home', home.home);
router.post('/wasoli',person_auto_submit.Read_write_person);
router.post('/filter/:category',filter.filter);
router.post('/delete/amount/:id',delete_expense.delete_expneses);
router.get('/signUp',sing_up.Sign_up_function);
router.post('/get/registered',get_registeredd.get_registered_fun);
router.post('/isemail/:email',email_check.email_check);
router.post('/api/login',login_user.login_function);


module.exports=router;