const express = require('express');
const router = express();
const Task = require('../models/Task');

router.get('/', async (req, res, next) => {
    
    
    try {
        const tasks = await Task.find();
        if (!tasks) return res.json({error: "no tasks found", status: false})
        res.json({tasks: tasks, status: false})
    } catch (err) {
        res.json({err: err.message})
    }

})

module.exports = router;