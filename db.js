var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.dbPath);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successfuly opened the db');
});

exports.mongoose = mongoose;
