import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './views/Welcome';
import BasicInfo from './views/BasicInfo';
import Confirmation from './views/Confirmation';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Route path='/confirmation' component={Confirmation} exact />
        <Route path='/basic-form' component={BasicInfo} exact />
        <Route path='/' component={Welcome} exact/>
      </div>
    </Router>
  );
}

export default App;
