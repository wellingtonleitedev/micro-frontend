import React from "react";
import ReactDOM from "react-dom";
import { Header, Input, Checkbox, Button } from "./components";
import GlobalStyle from './styles'

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <form>
      <Input label="E-mail" placeholder="user@email.com" />
      <Input label="Password" placeholder="secret" />
      <Checkbox label="Lembrar-me" />
      <Button>Acessar Plataforma</Button>
    </form>
    <GlobalStyle />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
