const express = require('express');
const router = express.Router();
const Member = require('../models/Member');


router.get('/:member_id',async (req, res, next) => {
    const { member_id } = req.params;

    try {
        const member =  await Member.find({_id: member_id})
        if (!member) return res.json({message: "not found", status: false});
        res.json(member)
    } catch (err) {
        res.json({error: err.message, status: false})
    }
    
})

module.exports = router;