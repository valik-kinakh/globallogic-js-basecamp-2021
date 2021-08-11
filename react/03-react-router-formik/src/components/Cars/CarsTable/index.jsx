import { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import carApi from '../../../api/carsApi';
import { MODE } from '../../../constants';
import { NAME, MODEL, TIMESTAMP, GEARBOX, ID } from '../constants';
import Actions from './Actions';
import './index.scss';


function CarsTable({ cars, setCars }) {
  const { url } = useRouteMatch();

  useEffect(() => {
    carApi.getCars().then(setCars);
  }, [setCars]);

  return (
    <div className='CarsTable'>
      <Link to={`${url}/car/${MODE.CREATE}`}><p className='createBtn'>Create Car</p></Link>

      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Model</th>
          <th>Gearbox</th>
          <th>Last Updated At</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {cars.map(car => (
          <tr key={car[ID]}>
            <td>{car[ID]}</td>
            <td>{car[NAME]}</td>
            <td>{car[MODEL]}</td>
            <td>{car[GEARBOX]}</td>
            <td>{car[TIMESTAMP]}</td>
            <td>
              <Actions id={car[ID]} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarsTable;