const jwt = require('jsonwebtoken')

const createJWTToken = user => {
    return jwt.sign({ user }, 'sucribete_json_dev', {
        expiresIn: '1d'
    })
}

module.exports = {
    createJWTToken,
}