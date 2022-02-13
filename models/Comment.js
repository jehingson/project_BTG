const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        requried: true
    },
    postId: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})

module.exports = model('Comment', commentSchema) 