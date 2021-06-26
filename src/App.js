import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Manager from './pages/Manager';


function App() {
  return (
    <>
      <Router>
        <Dashboard />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manager' component={Manager} />
         
        </Switch>
      </Router>
    </>
  );
}

export default App;