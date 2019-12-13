import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Index from "./components/View/index";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
