const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
    question:{
        type: String,
        required: true,
    },
    clientId: {
        type: String,
        required: true,
    },
    petitionId: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false,
})

module.exports = model('Question', questionSchema)