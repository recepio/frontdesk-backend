
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const cors          = require('cors');
const CONFIG = require('./app/config/config');
const app = express();
const users    = require('./app/routes/users');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log("Environment:", CONFIG.app)
const models = require("./app/models");
models.sequelize.authenticate().then(() => {
    console.log('Connected to SQL database:', CONFIG.database);
})
    .catch(err => {
        console.error('Unable to connect to SQL database:',CONFIG.database, err);
    });
if(CONFIG.app==='development'){
    models.sequelize.sync();//creates table if they do not already exist
    // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
}
app.use(cors());

app.use('/v1', users);

app.get('*', (req, res) => res.status(200).send({
    message: 'frontdesk backend',
}));

const port = CONFIG.app_port;

app.listen(port, () => {
    console.log('Server running on port: ', port);
});

process.on('uncaughtException', err => {
    console.log(err);
});

module.exports = app;