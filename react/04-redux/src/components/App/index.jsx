import { Switch, Redirect, Route, Link } from 'react-router-dom';
import './styles.scss';
import Users from '../Users';
import NotFound from '../NotFound';
import Todos from '../ToDoList/components/Todos';
import DisplayTodos from '../ToDoList/components/DisplayTodos';

function App() {
  return (
    <div className='App'>
      <nav>
        <h3>Menu</h3>
        <ul className={'nav-links'}>
          <li><Link to='/users'><p>Users</p></Link></li>
          <li><Link to='/todolist'><p>To do list</p></Link></li>
        </ul>
      </nav>
      <Switch>
        <Redirect exact from='/' to='/users' />

        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/todolist'>
          <div className='todoDiv'>
            <Todos />
          </div>
          <div className='todosDiv'>
            <DisplayTodos />
          </div>
        </Route>

        <Route path='*'><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
