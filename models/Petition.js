const { Schema, model } = require('mongoose')

const petitionSchema  = new Schema({
    name: {
        type: String,
        required: true
    }
},{
    timestamp: true,
})

module.exports = model('Petition', petitionSchema)