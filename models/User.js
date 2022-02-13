const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Provide a valida email address']
    },
    role: {
        type: String,
        enum : ['client','admin'],
        default: 'client'
    }
},{
    timestamps: true,
    versionKey: false,
})

module.exports = model('User', userSchema)