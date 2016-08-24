import React from "react"
import { observer, observable } from "mobx-react"

@observer
export default class ScoreboardRow extends React.Component {
  render() {
    const { id, name, activity, createdAt } = this.props.scoreboard

    var availableButtons

    if (id === this.props.selectedRowId) {
      availableButtons = <div>
        <button type="button">Edit</button>
        <button type="button" onClick={this.props.deleteScoreboard}>Delete</button>
      </div>
    } else {
      availableButtons = <div></div>
    }

    return <tr onMouseOver={this.props.onHover}>
      <td>{name}</td>
      <td>{activity}</td>
      <td>{createdAt}</td>
      <td>{availableButtons}</td>
    </tr>
  }
}

@observer
export default class ScoreboardTable extends React.Component {

  constructor() {
    super()
    this.state = {selectedRowId: ""};
  }

  handleSelectedRow(id) {
    this.setState({selectedRowId: id});
  }

  render() {
    const { scoreboards } = this.props.store

    const scoreboardTableData = scoreboards.map((scoreboard) => {
      return (
        <ScoreboardRow key={scoreboard.id} 
        scoreboard={scoreboard} 
        onHover={this.handleSelectedRow.bind(this, scoreboard.id)}
        deleteScoreboard={this.props.store.deleteScoreboard.bind(this.props.store, scoreboard.id)} 
        selectedRowId={this.state.selectedRowId}/>
      )
    })

    return <div>
      <h1>Scoreboards</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{scoreboardTableData}</tbody>
      </table>
    </div>
  }
}