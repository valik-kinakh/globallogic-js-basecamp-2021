import { Switch, Redirect, Route, Link } from 'react-router-dom';
import './styles.scss';
import Users from '../Users';
import Cars from '../Cars';
import NotFound from '../NotFound';

function App() {
  return (
    <div className='App'>
      <nav>
        <h3>Menu</h3>
        <ul className={'nav-links'}>
          <li><Link to='/users'><p>Users</p></Link></li>
          <li><Link to='/cars'><p>Cars</p></Link></li>
        </ul>
      </nav>
      <Switch>
        <Redirect exact from='/' to='/users' />

        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/cars'>
          <Cars />
        </Route>

        <Route path='*'><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
