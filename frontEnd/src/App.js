import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from "./app/index";
import Spc from "./app/axios";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/">
          <Spc />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
