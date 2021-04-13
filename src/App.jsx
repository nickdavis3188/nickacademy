import React from 'react';
import "./styles/App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Home';
import Service from './Service';

function App() {
  return(
    
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/service" component={Service}/>
        </Switch>
      </Router>
  
  )
}

export default App;
