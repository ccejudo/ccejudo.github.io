//React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/Navbar'
import Main from './layouts/Main/Main'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/'>
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
