import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import carApi from '../../../api/carsApi';
import { MODE } from '../../../constants';
import { ID } from '../constants';
import CarContainer from './CarContainer';
import { getInitialValues, getRequestPayload } from './converter';


function CarForm({ cars, setCars }) {
  const { mode, id } = useParams();
  const history = useHistory();

  const car = cars.find(car => car.id === Number(id));

  useEffect(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT) {
      if (!car) {
        carApi
          .getCar(Number(id))
          .then(car => setCars(prevCars => [...prevCars, car]))
          .catch(err => window.alert(err.message));
      }
    }
  }, [id, mode, cars, setCars]);

  const [gearboxes, setGearboxes] = useState([]);
  useEffect(() => {
    carApi.getGearbox().then(setGearboxes);
  }, [setCars]);

  const handleSubmit = async values => {
    try {
      const payload = getRequestPayload(values);

      switch (mode) {
        case MODE.CREATE:
          await carApi.createCar(payload);
          break;
        case MODE.EDIT:
          await carApi.editCar(payload);
          break;
        case MODE.CLONE:
          await carApi.createCar(payload);
          break;
        case MODE.DELETE:
          await carApi.deleteCar(payload);
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push('/cars');
  };

  const initialValues = getInitialValues(car);

  return (
    <CarContainer
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
      gearboxes={gearboxes}
      required={true}
    />
  );

}

export default CarForm;