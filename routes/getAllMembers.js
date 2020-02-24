const express = require('express');
const router = express.Router();
const Member = require('../models/Member');



router.get('/', async (req, res, next) => {


    try{
        const members = await Member.find();
        if (!members) return res.json({message: "no members found", status: false})
        res.json({members: members, status: true})  
    } catch {
        res.json({error: "some error", status: false})
    }

})

module.exports = router;