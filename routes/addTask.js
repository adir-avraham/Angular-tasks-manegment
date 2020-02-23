const express = require('express');
const router = express();
const Task = require('../models/Task');


router.post('/', async (req, res, next) => {

    
    const { task, date, done, member_id } = req.body;
    
    newTask = new Task ({
        task: task,
        date: date,
        done: done,
        member: member_id
    })
    
    try {
        const savedTask = await newTask.save(); 
        res.json({savedTask: savedTask, status: true})
    } catch (err) {
        res.json({error: err.message})
    }
    
    res.json(req.body)

})



module.exports = router;