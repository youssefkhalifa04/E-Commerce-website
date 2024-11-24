const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const prodcut= mongoose.model('Products' ,{

    Name:{
        type: String,
        required:true
    },
    Price : {
        type : String,
        required:true

    },
    image:{
        type : String,
        required:true
    }
})


module.exports= prodcut;