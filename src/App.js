import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Index from "./components/View/index";
import Tasks from "./components/View/tasks";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
