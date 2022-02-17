import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
