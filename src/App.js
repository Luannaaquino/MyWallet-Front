import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../src/pages/Login'
import SingUp from '../src/pages/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <SingUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
