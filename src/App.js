import React, { useState, useEffect } from "react";
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Order from './Components/Order';
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

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState({});
  const [price, setPrice] = useState(17.99);
  const [disabled, setDisabled] = useState(initialDisabled) 

  let history = useHistory();

  const routeToOrder = () => {
      history.push("/pizza/order");
  }

  const postPizzaOrder = (pizza) => {
    axios.post('https://reqres.in/api/pizza', pizza)
    .then((response) => {
      console.log(response.data);
      setOrder({...order, ...response.data});
      setFormValues(initialFormValues);
      routeToOrder();
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

  useEffect(() => {
    FormSchema.isValid(formValues)
    .then(isValid => setDisabled(!isValid))
  }, [formValues])

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
        <Route path="/pizza/order">
          <Order order={order} />
        </Route>
        <Route path="/pizza">
          <Form 
            submit={formSubmit} 
            inputChange={inputChange}
            formValues={formValues}
            formErrors={formErrors}
            price={price}
            disabled={disabled}
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
