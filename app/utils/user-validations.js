const { body } = require('express-validator/check')

exports.validate = (method) => {
    switch (method) {
        case 'user': {
            return [
                body('email', 'Invalid email').exists().isEmail(),
                body('password', 'empty password').exists()
            ]
        }
    }
}