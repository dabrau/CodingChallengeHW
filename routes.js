module.exports = function(app) {
  var scoreboard = require('./controllers/scoreboardController')

  app.get('/', function(req, res, next) {
    return res.send("WELCOME TO REST API");
  });

  app.post('/scoreboard', scoreboard.createScoreboard);
  app.get('/scoreboard', scoreboard.getScoreboard);
};
