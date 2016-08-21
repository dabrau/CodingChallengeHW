var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Participant = mongoose.model('Participant')

var Scoreboard = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true
  },
  activity: {
    type: String,
    enum: ['Thumb War', 'Red Hands', 'Rock Paper Scissors']
  },
  createdAt: {
    type: String,
    required: true
  },
  participants: [Participant]
});

module.exports = mongoose.model('Scoreboard', Scoreboard);
