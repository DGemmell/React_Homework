// If it contains logic, or holds the state of the program - its data

import React, { Component } from "react";
import FilmList from "../components/FilmList";

class FilmBox extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [{ id: 1, title: "Sausage Party", text: "12.00, 14.00, 17.00, 20.00"},
  {id:2, title: "Cafe Society", text: "10.00, 14.00, 21.00"},
  {id:3, title: "Morgan", text: "11.00, 20.30"},
  {id:4, title: "The 9th life of Louis Draux", text: "10.00, 14.00, 21.00"},
  {id:5, title: "Equity", text: "12.00, 15.00, 22.00"}
]
  };
}
render() {
    return (
      <div className="filmBox">
      <h2>UK Opening This Week</h2>
      <FilmList data={this.state.data} />
      </div>
    );


  }
}

export default FilmBox;
