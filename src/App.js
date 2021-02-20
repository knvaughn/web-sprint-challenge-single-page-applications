import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

const App = () => {

  const formSubmit = () => {
    
  }

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Pizza</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/pizza">
          <Form submit={formSubmit} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
