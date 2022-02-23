const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({

    title: {
        type: String,
        required:true
    },
    text: {
        type: String,
        required:true
    }

})


module.exports = mongoose.model('Todo', todoSchema)