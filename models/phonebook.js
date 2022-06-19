let mongoose = require('mongoose');

// model class
let phonebookModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String,    
},
{
    collection: "phonebook"
});

module.exports = mongoose.model('phonebook_model', phonebookModel);