function scoreboardController () {
  var Scoreboard = require('../models/scoreboardSchema');

  this.createScoreboard = (req, res, next) => {
    var newScoreboard = JSON.parse(req.body);
    newScoreboard.createdAt = new Date();
    
    Scoreboard.create(newScoreboard, (err, result) => {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'result':result,'status':'successfully saved'});
      }
    });
  };

  this.getScoreboards = (req, res, next) => {
    Scoreboard.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'scoreboards':result});
      }
    });
  };

  this.getScoreboard = (req, res, next) => {
    Scoreboard.findById(req.params.id, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'scoreboard':result});
      }
    });
  };

  this.updateScoreboard = (req, res, next) => {
    Scoreboard.findByIdAndUpdate(req.params.id, { $set: JSON.parse(req.body) }, function(err, result) {
      if (err) {
        return res.send({'error':err});
      } else {
        return res.send({'status':'sucessfully updated'});
      }
    });
  };

  this.deleteScoreboard = (req, res, next) => {
    Scoreboard.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      } else {
        return res.send({'status':'sucessfully deleted'});
      }
    });
  };

  this.addParticipant = (req, res, next) => {
    Scoreboard.findById(req.params.scoreboardId, function(err, result) {
      result.participants.create(JSON.parse(req.body), function(err, result) {
        if (err) {
          console.log(err);
          return res.send({'error':err});
        } else {
          return res.send({'result':result,'status':'successfully added'});
        }
      });
    });
  };

  this.updateParticipant = (req, res, next) => {
    Scoreboard.findOneAndUpdate(
      { "_id": req.params.scoreboardId, "participants._id": participants._id },
      { $set: JSON.parse(req.body) },
      function(err, result) {
        if (err) {
          console.log(err);
          return res.send({'error':err});
        } else {
          return res.send({'result':result,'status':'successfully removed'});
        }
      }
    );
  };

  this.removeParticipant = (req, res, next) => {
    Scoreboard.findById(req.params.scoreboardId, function(err, result) {
      result.participants.id(req.params.id).remove()
      result.save(function(err, result) {
        if (err) {
          console.log(err);
          return res.send({'error':err});
        } else {
          return res.send({'result':result,'status':'successfully removed'});
        }
      });
    });
  };

};

module.exports = new scoreboardController();