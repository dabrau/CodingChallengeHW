import React from "react"
import ReactDom from "react-dom"

import ScoreboardTable from "./ScoreboardTable"
import store from "./ScoreboardStore"

const app = document.getElementById("app")

ReactDom.render(<ScoreboardTable store={store} />, app)