const mongoose = require('mongoose');

//from  which pattern we accept data from user,given below
const userSchema = mongoose.Schema({
    id: {
        type: 'string',
        require: true
    },
    name: {
        type: 'string',
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    createdOn: {
        type: Date,
        dafault: Date.now,
    }
});

//exports userSchema
module.exports = mongoose.model('User',userSchema)