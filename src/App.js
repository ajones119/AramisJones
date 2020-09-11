import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Resume } from './components/Resume';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Hobbies2 } from './components/Hobbies';


const App = () => (<div>
  <Router>
    <Switch>
      <Route path = "/hobbies">
        <Hobbies2></Hobbies2>
      </Route>
    <Route path = "/contact">
        <Contact></Contact>
      </Route>
      <Route path = "/projects">
        <Projects></Projects>
      </Route>
      <Route path = "/resume">
        <Resume></Resume>
      </Route>
      <Route path="/">
      <Home></Home>
      </Route>
    </Switch>
  </Router>
  
  

  </div>
);




export default App;