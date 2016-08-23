module.exports = (path) => { 
  var mongoose = require('mongoose');

  //connect to db
  mongoose.connect(path);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('successfuly opened the db');
  });

  //register models
  var exported_model, i,  path_fn, 
    files = ['participantSchema.js', 'scoreboardSchema.js'];

  for(i = 0; i < files.length; i++) {
    path_fn = "./models/" + files[i];
    exported_model = require(path_fn);
  }
}

