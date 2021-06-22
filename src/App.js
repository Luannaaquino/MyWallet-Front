import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../src/pages/Login'
import SingUp from '../src/pages/SignUp'
import Wallet from './pages/Wallet';

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
        <Route path="/Wallet" exact>
          <Wallet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
