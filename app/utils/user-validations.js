const { body } = require('express-validator/check')

exports.validate = (method) => {
    switch (method) {
        case 'user': {
            return [
                body('email', 'Invalid email').exists().isLength({ min: 1 }).isEmail(),
                body('password', 'empty password').exists().isLength({ min: 1 })
            ]
        }
    }
}