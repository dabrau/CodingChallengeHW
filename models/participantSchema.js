var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Participant = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number, 
    min: 0
  },
  matches: {
    type: Number, 
    min: 0
  },
  matchesWon: {
    type: Number, 
    min: 0
  },
});

module.exports = mongoose.model('Participant', Participant)
