module.exports = (app) => {
  var restify = require('restify');
  var scoreboard = require('./controllers/scoreboardController')

  app.get('/', restify.serveStatic({
      directory: __dirname + '/client',
      file: 'index.html'
  }));

  app.get(/\/js\/?.*/, restify.serveStatic({
      directory: __dirname + '/client/js',
      file: 'main.min.js'
  }));

  app.post('/scoreboard', scoreboard.createScoreboard);
  app.get('/scoreboard', scoreboard.getScoreboards);
  app.get('/scoreboard/:id', scoreboard.getScoreboard);
  app.put('/scoreboard/:id', scoreboard.updateScoreboard);
  app.del('/scoreboard/:id', scoreboard.deleteScoreboard);

  app.post('/scoreboard/:scoreboardId/participant', scoreboard.addParticipant);
  app.put('/scoreboard/:scoreboardId/participant/:id', scoreboard.updateParticipant);
  app.del('/scoreboard/:scoreboardId/participant/:id', scoreboard.removeParticipant);
};
