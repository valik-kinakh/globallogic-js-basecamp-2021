import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OrderForm from './components/OrderForm/OrderForm';
import Home from './components/Home/Home';
import Drones from './components/Drones/Drones';
import {OrderProvider} from './context/orderContext';

import './App.css';


export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    exact: true,
  },
  {
    path: '/products',
    component: Drones,
    title: 'Drones',
    exact: true,
  },
  {
    path: '/order',
    component: OrderForm,
    title: 'My Order',
  },
];
const ContextRoute = ({ component, ...rest }) => {
  const Component = component;

  return (
    <Route {...rest}>
      <OrderProvider>
        <Component />
      </OrderProvider>
    </Route>
  );
};


function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          {routes.map(route => (
            <ContextRoute exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
