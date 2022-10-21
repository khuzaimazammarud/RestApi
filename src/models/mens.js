const express = require('express');

const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({

    rank : {
        type : Number,
        required : true,
        unique: true
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    dob : {
        type : String,
        required : true,
        trim   : true
    },
    country : {
        type : String,
        required : true,
        trim : true
    },
    score : {
        type : Number,
        required : true
    },
    event : {
        type : String,
        default : "100m"
    },

});

const mensRanking = mongoose.model('Ranking', menSchema);

module.exports = mensRanking;

