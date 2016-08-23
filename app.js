var config = require('./config');

var restify = require('restify');
var app = restify.createServer();

app.use(restify.bodyParser());
app.listen(config.port, () => {
  console.log('server listening on port number', config.port)
});

require('./db.js')(config.dbPath)
require('./routes')(app);
