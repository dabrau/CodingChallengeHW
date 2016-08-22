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

  this.getScoreboards = function (req, res, next) {
    Scoreboard.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'scoreboards':result});
      }
    });
  };

  this.getScoreboard = function (req, res, next) {
    Scoreboard.findById(req.params.id, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'scoreboard':result});
      }
    });
  };

  this.updateScoreboard = function (req, res, next) {
    Scoreboard.findByIdAndUpdate(req.params.id, { $set: JSON.parse(req.body) }, function(err, result) {
      if (err) {
        return res.send({'error':err});
      } else {
        return res.send({'status':'sucessfully updated'});
      }
    });
  };

  this.deleteScoreboard = function (req, res, next) {
    Scoreboard.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'status':'sucessfully deleted'});
      }
    });
  };

};

module.exports = new scoreboardController();