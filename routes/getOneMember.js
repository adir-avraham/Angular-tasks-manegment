const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const Task = require('../models/Task');

router.get('/:member_id',async (req, res, next) => {
    const { member_id } = req.params;

    try {
        const member =  await Task.find({member: member_id}).populate('member')
           
        if (!member) return res.json({message: "not found", status: false});
        res.json(member)
    } catch (err) {
        res.json({error: err.message, status: false})
    }
    
})

module.exports = router;