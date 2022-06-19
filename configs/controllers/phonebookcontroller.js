let phonebook = require('../../models/phonebook');

module.exports.listRecords = function(req, res, next) {
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
};

module.exports.showAddRecord = function(req, res, next) {
    res.render('phonebook/edit', { title: 'Add Phonebook Entry', entry: {} });
};

module.exports.addRecordToDatabase = function(req, res, next) {
    let newEntry = new phonebook({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });
    
    phonebook.create(newEntry, (err, entry) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/phonebook');
        }
    });
};


module.exports.showEditRecord = function(req, res, next) {
    let id = req.params.mongoid;
    phonebook.findById(id, (err, record) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('phonebook/edit', { title: 'Edit Phonebook Entry', entry: record });
        }
    });
};

module.exports.updateRecordInDatabase = function(req, res, next) {
    let id = req.params.mongoid;
    let existingEntry = new phonebook({
        _id: id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });
    
    phonebook.updateOne({_id: id}, existingEntry, (err, entry) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/phonebook');
        }
    });
};

module.exports.deleteRecordInDatabase = function(req, res, entry){
    let id = req.params.mongoid;
    phonebook.remove({_id: id}, (err)=>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/phonebook');
        }
    });    
};
