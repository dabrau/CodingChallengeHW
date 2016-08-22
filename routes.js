module.exports = function(app) {
  var scoreboard = require('./controllers/scoreboardController')

  app.get('/', function(req, res, next) {
    return res.send("WELCOME TO REST API");
  });

  app.post('/scoreboard', scoreboard.createScoreboard);
  app.get('/scoreboard', scoreboard.getScoreboards);
  app.get('/scoreboard/:id', scoreboard.getScoreboard);
  app.put('/scoreboard/:id', scoreboard.updateScoreboard);
  app.del('/scoreboard/:id', scoreboard.deleteScoreboard);
};
