
/*Lyudmila Zhurba
    301250531
    June 20, 2022
    creating all controllers for phone book*/


let express = require('express');
let router = express.Router();
let controller = require('../configs/controllers/phonebookcontroller');

//get a rout for contact page Read 
router.get('/', controller.listRecords);

router.get('/add', controller.showAddRecord);

router.post('/add', controller.addRecordToDatabase);

router.get('/edit/:mongoid', controller.showEditRecord);

router.post('/edit/:mongoid', controller.updateRecordInDatabase);

router.get('/delete/:mongoid', controller.deleteRecordInDatabase);

module.exports = router;