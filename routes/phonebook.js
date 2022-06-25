
/*Lyudmila Zhurba
    301250531
    June 20, 2022
    creating all controllers for phone book*/


let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let passport = require('passport');
let controller = require('../configs/controllers/phonebookcontroller');
let jwt = require('jsonwebtoken');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//get a rout for contact page Read 
router.get('/', requireAuth, controller.listRecords);

router.get('/add', requireAuth, controller.showAddRecord);

router.post('/add', requireAuth, controller.addRecordToDatabase);

router.get('/edit/:mongoid', requireAuth, controller.showEditRecord);

router.post('/edit/:mongoid', requireAuth, controller.updateRecordInDatabase);

router.get('/delete/:mongoid', requireAuth, controller.deleteRecordInDatabase);

module.exports = router;