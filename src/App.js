import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/UserContext';
import { useState } from 'react';

import Login from '../src/pages/Login'
import SingUp from '../src/pages/SignUp'
import Wallet from './pages/Wallet';
import Input from './pages/Transactions/Input'
import Output from './pages/Transactions/Output'

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
        <Route path="/add-received" exact>
          <Input />
        </Route>
        <Route path="/add-spent" exact>
          <Output />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
