const mongoose = require('mongoose');


const MemberSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('Member', MemberSchema);