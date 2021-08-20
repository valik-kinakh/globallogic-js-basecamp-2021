import { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import userApi from '../../../api/userApi';
import { MODE } from '../../../constants';
import { ID, USERNAME, ROLE, TIMESTAMP, AGE } from '../constants';
import Actions from './Actions';
import './index.scss';

function UsersTable({ users, setUsers }) {
  const { url } = useRouteMatch();

  useEffect(() => {
    userApi.getUsers().then(setUsers);
  }, [setUsers]);

  return (
    <div className='UsersTable'>
      <Link to={`${url}/user/${MODE.CREATE}`}><p className='createBtn'>Create User</p></Link>

      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Age</th>
          <th>Role</th>
          <th>Last Updated At</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user[ID]}>
            <td>{user[ID]}</td>
            <td>{user[USERNAME]}</td>
            <td>{user[AGE]}</td>
            <td>{user[ROLE]}</td>
            <td>{user[TIMESTAMP]}</td>
            <td>
              <Actions id={user[ID]} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
