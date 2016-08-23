import React from "react"
import ReactDom from "react-dom"

import ScoreboardList from "./ScoreboardList"
import store from "./ScoreboardStore"

const app = document.getElementById("app")

ReactDom.render(<ScoreboardList store={store} />, app)