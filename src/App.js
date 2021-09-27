import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <Switch>
        <Route excat path='/' component={Home} />
        <Route excat path='/login' component={Login} />
        <Route excat path='/singup' component={Signup} />
        
      </Switch>
    </Router>
  );
}

export default App;
