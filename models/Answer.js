const { Schema, model } = require('mongoose')

const answerSchema = new Schema({
    answer: {
        type: String,
        required: true,
    },
    adminId: {
        type: String,
        required: true,
    },
    questionId: {
        type: String,
        required: true,
    }
},{
    timestamp: true,
    versionKey: false,
})

module.exports = model('Answer', answerSchema)