const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema);