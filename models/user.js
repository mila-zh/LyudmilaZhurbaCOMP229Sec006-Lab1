let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

// configure options  User Model
User.plugin(passportLocalMongoose, { missingPasswordError: 'Wrong / Missing Password' });

module.exports.User = mongoose.model('User', User);
