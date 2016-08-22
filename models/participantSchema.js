var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Participant = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  score: Number,
  matches: Number,
  matchesWon: Number
});

module.exports = mongoose.model('Participant', Participant)
