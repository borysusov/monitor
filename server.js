var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app  = express();
var config = require('./server/config/config')[env];

// TODO: fix if
if ('development' == env) {
    require('./server/config/express')(app, config);
}

require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Server is running on ' + config.port + '...');