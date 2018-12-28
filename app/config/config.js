require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application


CONFIG.app          = process.env.APP   || 'development';
CONFIG.app_port         = process.env.PORT  || '8001';

CONFIG.dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.host      = process.env.DB_HOST       || '127.0.0.1';
CONFIG.database      = process.env.DB_NAME       || 'testApp';
CONFIG.username      = process.env.DB_USER       || 'root';
CONFIG.password  = process.env.DB_PASSWORD   || 'aesaesaes';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt-jwt-jwt';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';




module.exports = CONFIG;
