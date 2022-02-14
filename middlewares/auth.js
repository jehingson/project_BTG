const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    let token = ''
    if (req.headers.authorization && req.headers.authorization.split(' ')[1]) {
        token = req.headers.authorization.split(' ')[1];
        const verified = jwt.verify(token, 'sucribete_json_dev')
        req.user = verified.user
    }
    next();
}

module.exports = {
    authenticate
}