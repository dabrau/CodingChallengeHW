var Participant = mongoose.model('Participant')

var Scoreboard = new Schema({
  name: ObjectId,
  activity: Enum,
  date: Date,
  comments: [Participant]
});

mongoose.model('Scoreboard', Scoreboard);
