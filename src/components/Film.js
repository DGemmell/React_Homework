// presentational code will be in the components folder

import React from "react";

const Film = (props) =>
      <div className="film">
      <h4 className="filmTitle">{props.title}</h4>
      {props.children}
      </div>

export default Film;
