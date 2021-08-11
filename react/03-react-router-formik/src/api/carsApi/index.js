import { wait, createGetId, getTimestamp, throwError } from '../utisl';
import data from './db';

const getId = createGetId(data.length);

const api = {
  // GET /cars
  async getCars() {
    await wait(1000);

    console.log('GET /cars', data);
    return data;
  },
  // GET /cars/:id
  async getCar(id) {
    await wait();

    const car = data.find(c => c.id === id);

    if (car) {
      console.log(`GET /cars/${car.id}`, car);
      return car;
    } else {
      throwError(id);
    }
  },
  // POST /cars
  async createCar(car) {
    await wait();

    const newCar = {
      ...car,
      id: getId(),
      timestamp: getTimestamp()

    };

    data.push(newCar);

    console.log('POST /cars', newCar);
    return newCar;
  },
  // PUT /cars
  async editCar(car) {
    await wait();

    const index = data.findIndex(c => c.id === car.id);

    if (~index) {
      data[index] = {
        ...car,
        timestamp: getTimestamp()
      };

      console.log('PUT /car', data[index]);
      return data[index];
    } else {
      throwError(car.id);
    }
  },
  // DELETE /users
  async deleteCar(car) {
    await wait();

    const index = data.findIndex(c => c.id === car.id);

    if (~index) {
      console.log('DELETE /car', car);
      return data.splice(index, 1);
    } else {
      throwError(car.id);
    }
  },
  // GET /roles
  async getGearbox() {
    await wait();
    const GEARBOXES = ['manual', 'auto'];

    console.log('GET /gearboxes', GEARBOXES);
    return GEARBOXES;
  }
};

export default api;