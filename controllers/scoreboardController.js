function scoreboardController () {
  var Scoreboard = require('../models/scoreboardSchema');

  this.createScoreboard = function (req, res, next) {
    var newScoreboard = JSON.parse(req.body);
    newScoreboard.createdAt = new Date();
    
    Scoreboard.create(newScoreboard, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'result':result,'status':'successfully saved'});
      }
    });
  };

  this.getScoreboard = function (req, res, next) {
    Scoreboard.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'scoreboard':result});
      }
    });
  };
};

module.exports = new scoreboardController();
