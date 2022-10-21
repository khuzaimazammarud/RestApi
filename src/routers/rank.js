const express = require('express')
const mensRanking = require('../models/mens');

const router = express.Router();

router.post('/',async (req,res) => {
    try{
        const newrecord = new mensRanking(req.body);
        const insert = await newrecord.save();
        res.status(201).send(insert);
    }catch(err){

        res.status(400).send(err);
    }
})

router.get('/',async (req,res) => {
    try{
        const view = await mensRanking.find({});
        res.send(view);
    }catch(err){

        res.status(400).send(err);
    }
})

//get any player by its id
router.get('/:_id',async (req,res) => {
    try{
        const _id = req.params._id;
        const view = await mensRanking.findById(_id);
        res.send(view);
    }catch(err){

        res.status(400).send(err);
    }
})

//find anyu player with id
router.patch('/:_id',async (req,res) => {
    try{
        const _id = req.params._id;
        const view = await mensRanking.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(view);
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;