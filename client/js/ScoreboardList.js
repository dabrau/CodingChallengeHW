import React from "react"
import { observer } from "mobx-react"

@observer
export default class ScoreboardList extends React.Component {
  

    
   
  render() {
    const { scoreboards } = this.props.store

    const scoreboardList = scoreboards.map(scoreboard => (
      <tr key={scoreboard.id}>
        <td>{scoreboard.name}</td>
        <td>{scoreboard.activity}</td>
        <td>{scoreboard.createdAt}</td>
        <td><button/></td>
      </tr>
    ))

    return <div>
      <h1>Scoreboards</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>{scoreboardList}</tbody>
      </table>
    </div>
  }
}