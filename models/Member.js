const mongoose = require('mongoose');


const MemberSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}] 
})


module.exports = mongoose.model('Member', MemberSchema);