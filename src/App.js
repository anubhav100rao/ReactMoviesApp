import React from 'react';
import './App.css';
import Options from './components/options/Options';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Maths from './components/maths/Maths';
import Cs from './components/cs/Cs';
import Physics from './components/physics/Physics';
function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Options} />
          <Route exact path="/maths" component={Maths}/>
          <Route exact path="/cs" component={Cs}/>
          <Route exact path="/physics" component={Physics} />
        </Switch>
    </div>
  );
}

export default App;
