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
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        require: true
    }
})


module.exports = mongoose.model('Task', TaskSchema);