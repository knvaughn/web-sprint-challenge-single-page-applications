import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false, 
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  glutenFreeCrust: false,
  instructions: '',
  quantity: 1
}

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
