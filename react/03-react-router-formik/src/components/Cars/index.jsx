import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { MODE } from '../../constants';
import CarsTable from './CarsTable';
import CarForm from './CarForm';
import NotFound from '../NotFound';


function Cars() {
  const { path } = useRouteMatch();
  const [cars, setCars] = useState([]);

  return (
    <div className='App'>
      <Switch>
        <Route exact path={path}>
          <CarsTable cars={cars} setCars={setCars} />
        </Route>

        <Route exact
               path={`${path}/car/:mode(${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT}|${MODE.CLONE}|${MODE.DELETE})/:id?`}>
          <CarForm cars={cars} setCars={setCars} />
        </Route>

        <Route path='*'><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default Cars;