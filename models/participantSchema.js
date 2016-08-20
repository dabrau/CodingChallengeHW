var Participant = new Schema({
  name: ObjectId,
  score: Number,
  matches: Number,
  matchesWon: Number
});

mongoose.model('Participant', Participant)
