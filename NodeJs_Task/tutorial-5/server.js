const express = require('express');
const register = require('@react-ssr/express/register');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ type: '*/*' }));

let saloons = require('./data/saloonData');
let coupes = require('./data/coupeData');
let SUVs = require('./data/suvData');

const pages = ['Saloon', 'Coupe', 'SUV'];

(async () => {
  await register(app);

  app.get('/', (req, res) => {
    res.render('index', { pages });
  });

  app.get('/saloon', (req, res) => {
    res.render('Saloon/saloon', { cars: saloons });
  });

  app.get('/coupe', (req, res) => {
    res.render('Coupe/coupe', { cars: coupes });
  });

  app.get('/suv', (req, res) => {
    res.render('SUV/suv', { cars: SUVs });
  });

  app.get('/api/saloon/:id', (req, res) => {
    const selectedCar = saloons.find(car => car.id == req.params.id);
    res.json(selectedCar);
  });

  app.get('/api/coupe/:id', (req, res) => {
    const selectedCar = coupes.find(car => car.id == req.params.id);
    res.json(selectedCar);
  });

  app.get('/api/suv/:id', (req, res) => {
    const selectedCar = SUVs.find(car => car.id == req.params.id);
    res.json(selectedCar);
  });

  app.post('/api/coupe' || '/api/saloon' || '/api/suv', (req, res) => {
    const info = req.body;
    const path = req.path;
    switch (path) {
      case '/api/coupe':
        coupes.push({
          id: coupes.length + 1,
          name: info.name,
          src: info.src
        });
        break;
      case '/api/saloon':
        saloons.push({
          id: saloons.length + 1,
          name: info.name,
          src: info.src
        });
        break;
      case '/api/suv':
        SUVs.push({
          id: SUVs.length + 1,
          name: info.name,
          src: info.src
        });
        break;
      default:
        app.get('*',(req, res) => {
          res.render('NotFound/notFound');
        })
        break;
    }
    res.json({ message: 'Successfuly created' });
  });

  app.put('/api/coupe/:id' || '/api/saloon/:id' || '/api/suv/:id', (req, res) => {
    const info = req.body;
    const path = req.path;

    switch (path) {
      case '/api/coupe/:id':
        coupes.map(car => {
          if (car.id == req.params.id) {
            return ({
              id: req.params.id,
              model: info.model || car.model,
              name: info.name || car.name,
              src: info.src || car.src
            });
          }
          return car;
        });
        break;
      case '/api/saloon/:id':
        saloons.map(car => {
          if (car.id == req.params.id) {
            return ({
              id: req.params.id,
              model: info.model || car.model,
              name: info.name || car.name,
              src: info.src || car.src
            });
          }
          return car;
        });
        break;
      case '/api/suv/:id':
        SUVs.map(car => {
          if (car.id == req.params.id) {
            return ({
              id: req.params.id,
              model: info.model || car.model,
              name: info.name || car.name,
              src: info.src || car.src
            });
          }
          return car;
        });
        break;
      default:
        app.get('*',(req, res) => {
          res.render('NotFound/notFound');
        });
        break;
    }
  });

  app.get('*',(req, res) => {
    res.render('NotFound/notFound');
  });


  app.listen(8090, () => {
    console.log('Working on http://localhost:8090');
  });
})();

