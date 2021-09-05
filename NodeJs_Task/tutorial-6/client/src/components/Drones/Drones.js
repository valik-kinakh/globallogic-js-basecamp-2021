import { useContext, useState, useEffect } from 'react';
import OrderContext from '../../context/orderContext';
import Nav from '../Nav/Nav';
import Quotes from '../Quotes/Quotes';

import autelImg from '../../images/autel_evo_2.jpg';
import djiAirImg from '../../images/dji_air_2.jpg';
import djiMiniImg from '../../images/dji_mini_2.jpg';
import djiPhantomImg from '../../images/dji_phantom_pro.jpg';
import hubsanImg from '../../images/hubsan_zino_pro.jpg';
import xiaomiImg from '../../images/xiaomi_fimi.jpg';

import './Drones.css'

const dronesApi=[
  {
    _id:'1',
    name:'djiAir',
    price:20000,
    topSpeed:73.4,
    topHeight:4000
  },
  {
    _id:'2',
    name:'djiMini',
    price:17000,
    topSpeed:73.4,
    topHeight:3500
  },
  {
    _id:'3',
    name:'djiPhantom',
    price:74000,
    topSpeed:80,
    topHeight:5000
  },
  {
    _id:'4',
    name:'autel',
    price:36000,
    topSpeed:100,
    topHeight:4230
  },
  {
    _id:'5',
    name:'xiaomi',
    price:18000,
    topSpeed:62.5,
    topHeight:3000
  },
  {
    _id:'6',
    name:'hubsan',
    price:25000,
    topSpeed:78,
    topHeight:4500
  }
]

const getImgSrc = type => {
  const imgSrc = {
    autel: autelImg,
    djiMini: djiMiniImg,
    djiAir: djiAirImg,
    djiPhantom: djiPhantomImg,
    hubsan: hubsanImg,
    xiaomi:xiaomiImg
  };

  return imgSrc[type];
};

export default function Drones(){
  const endpoint = 'http://localhost:8080/api/products';
  const [drones, setDrones] = useState(dronesApi);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then(json => setDrones(json.data));
  }, []);

  const { order, setOrder } = useContext(OrderContext);


  return(
    <section>
      <Nav />
      <h3>Our best drones</h3>
      <div className="drones-list">
        {drones.map(drone => (
          <div className="drone-item" key={drone._id}>
            <img src={getImgSrc(drone.name)} alt={drone.name} />
            <p className="drone-name">
              {drone.name}
              <div>{`Price: (${drone.price} UAH)`}</div>
              <div>{`Speed: ${drone.topSpeed}km/h`}</div>
              <div>{`Max height: ${drone.topHeight}m`}</div>
            </p>
            <button
              onClick={() => setOrder([...order, drone])}
            >
              Add to my Order
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}