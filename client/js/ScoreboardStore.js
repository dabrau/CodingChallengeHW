import { computed, observable } from "mobx"
import axios from "axios"
// class Participant {
//   @observable id
//   @observable name
//   @observable score
//   @observable matches
//   @observable matchesWon

//   constructor(participant) {
//     this.id = participant._id
//     this.name = participant.name
//     this.score = participant.score
//     this.matches = participant.matches
//     this.matchesWon = participant.matchesWon
//   }
// }

class Scoreboard {
  @observable id
  @observable name
  @observable activity
  @observable createdAt
  @observable participants = [];

  constructor(scoreboard) {
    this.id = scoreboard._id
    this.name = scoreboard.name
    this.activity = scoreboard.activity
    this.createdAt = scoreboard.createdAt
    this.participants = scoreboard.participats
  }

  updateFromJson(json) {
    this.id = json._id
    this.name = json.name
    this.activity = json.activity
    this.createdAt = json.createdAt
  }
}

class ScoreboardStore {
  @observable scoreboards = [];

  updateScoreboardFromServer(json) {
    var scoreboard = this.scoreboards.find(scoreboard => scoreboard.id === json._id);
    
    if (!scoreboard) {
      scoreboard = new Scoreboard(json);
      this.scoreboards.push(scoreboard);
    } else {
      scoreboard.updateFromJson(json);
    }
  }

  deleteScoreboard(id) {
    axios.delete("/scoreboard/" + id)
      .then((response) => { 
        console.log(this)
        let index = this.scoreboards.findIndex((e, i, arr) => e.id === id);
        if (index > -1) {
          this.scoreboards.splice(index, 1);
        }
      })
      .catch((error) => { console.log(error) });
  }

  loadScoreboards() {
    axios.get("/scoreboard")
      .then((response) => { 
        var scoreboards = response.data.scoreboards;
        scoreboards.forEach(this.updateScoreboardFromServer, this);
      })
      .catch((error) => { console.log(error) });
  }

  constructor() {
    this.loadScoreboards()
  }
}

var store = new ScoreboardStore

export default store