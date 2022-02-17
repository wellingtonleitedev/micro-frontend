import React from "react";
import ReactDOM from "react-dom";
import { Header, Input } from 'common/components'
import GlobalStyle from 'common/styles'

import "./index.scss";

const App = () => (
  <>
    <Header />
    <Input label="Email" />
    <GlobalStyle />
  </>
)
ReactDOM.render(<App />, document.getElementById("app"));
