const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const user = mongoose.model('User' ,{

    Name : {
        type : String,
        required:true
    },
    Email:{
        type: String,
        required:true
    },
    Password:{
        type: String,
        required:true
    },
})

module.exports = user;