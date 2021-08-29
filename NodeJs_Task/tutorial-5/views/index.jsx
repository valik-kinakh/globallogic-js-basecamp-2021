import React, { Fragment } from 'react';
import { Head } from '@react-ssr/express';
import './index.css';

export default function Index({ pages }) {
  return (
    <Fragment>
      <Head>
        <title>
          Training app using React and Express
        </title>
      </Head>

      <div className='main-page'>
        <h1>Welcome to your dream Garage!</h1>
        <h3>Choose your car type</h3>
        <ul>
          {
            pages.map(page => {
              return <li key={page}>
                <p><a key={`/${page}_main`} href={`/${page}`}>{page}</a></p>
                <br />
                {page === 'Saloon' &&
                <img src='http://ts2.mm.bing.net/th?id=OIP.Mf0b19510177fba1c2bfdc5997876bb2eH0&pid=15.1' />}
                {page === 'Coupe' &&
                <img src='http://ts1.mm.bing.net/th?id=OIP.Me6cec521bfabe34fc8c1ad225d512093H0&pid=15.1' />}
                {page === 'SUV' &&
                <img src='http://ts3.mm.bing.net/th?id=OIP.Mc3831bffd2d232bd0e26436351fe999dH0&pid=15.1' />}
              </li>;
            })
          }
        </ul>
      </div>


    </Fragment>
  );
}
