import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import landingPage from './components/home/landingPage'
import {Navbar} from './components/navigation/navbar'
import signup from './components/auth/signup'
import login from './components/auth/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={landingPage} />
          <Route exact path='/signup' component={signup} />
          <Route exact path='/login' component={login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
