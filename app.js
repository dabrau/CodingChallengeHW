var restify = require('restify');
var config = require('./config');
var app = restify.createServer();

app.use(restify.bodyParser());
app.listen(config.port, () => {
  console.log('server listening on port number', config.port)
});


var routes = require('./routes')(app);
