let express = require('express');
let router = express.Router();
let phonebook = require('../models/phonebook');

//get a rout for contact page Read 
router.get('/', (req, res, next) => {
    phonebook.find((err, all) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('phonebook/list', { title: 'Phonebook', allContacts: all });
        }
    });
});

module.exports = router;