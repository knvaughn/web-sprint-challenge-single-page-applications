import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import FormSchema from './validation/FormSchema';
import * as Yup from 'yup';
import axios from 'axios';

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

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: '',
  sausage: '',
  canadianBacon: '',
  spicyItalianSausage: '',
  grilledChicken: '',
  onions: '',
  greenPepper: '',
  dicedTomatoes: '',
  blackOlives: '', 
  roastedGarlic: '',
  artichokeHearts: '',
  threeCheese: '',
  pineapple: '',
  extraCheese: '',
  glutenFreeCrust: '',
  instructions: '',
  quantity: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState({});

  const postPizzaOrder = (pizza) => {
    axios.post('https://reqres.in/api/pizza', pizza)
    .then((response) => {
      console.log(response.data);
      setOrder({...order, ...response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const formSubmit = () => {
    postPizzaOrder(formValues);
  }

  const inputChange = (name, value) => {
    Yup.reach(FormSchema, name)
    .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch((error) => {setFormErrors({...formErrors, [name]: error.errors[0]})})
    setFormValues({
      ...formValues,
      [name]: value
    })
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
          <Form 
            submit={formSubmit} 
            inputChange={inputChange}
            formValues={formValues}
            formErrors={formErrors}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
