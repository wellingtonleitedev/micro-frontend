import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Signin from "./modules/signin/signin";

const App = () => (
  <div className="container">
    <Signin />
    {/* <GLobalStyle /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
