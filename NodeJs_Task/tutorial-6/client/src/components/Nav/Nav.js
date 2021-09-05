import { Link } from 'react-router-dom';

import { routes } from '../../App';

import './Nav.css';

export default function Nav() {

  return (
    <ul className='nav'>
      {routes.map(route => (
        <li className='nav-item'>
          <Link to={route.path}>
            <p>
            {route.title === 'My Order'
              ? `${route.title}`
              : route.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

