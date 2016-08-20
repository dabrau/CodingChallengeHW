var restify = require('restify');
var config = require('./config');
var app = restify.createServer();

app.use(restify.bodyParser());
app.listen(config.port, () => {
  console.log('server listening on port number', config.port)
})
var mongoose = require('mongoose');
//conect to mongodb
mongoose.connect(config.dbPath);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successfuly opened the db')
});

Schema = mongoose.Schema;
