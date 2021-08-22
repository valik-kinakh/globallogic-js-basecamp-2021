import { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import userApi from '../../../api/userApi';
import { MODE } from '../../../constants';
import { ID, USERNAME, ROLE, TIMESTAMP, AGE } from '../constants';
import Actions from './Actions';
import './index.scss';
import { fetchUsers } from '../../Store/redux/reducers/userReducer';

function UsersTable() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.usersFetched);

  useEffect(() => {
    if (!status) {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  let displayInfo;

  if (!status) {
    displayInfo = <p>Loading...</p>;
  } else if (status) {
    displayInfo = <div>
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
    </div>;
  }

  return (
    <div className='UsersTable'>
      {displayInfo}
    </div>
  );
}

export default UsersTable;
