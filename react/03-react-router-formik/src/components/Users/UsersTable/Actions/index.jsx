import { useRouteMatch, useHistory } from 'react-router-dom';
import './styles.scss';
import { MODE } from '../../../../constants';

function Actions({ id }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  const redirect = mode => () => {
    history.push(`${url}/user/${mode}/${id}`);
  };

  return (
    <div className='Actions'>
      <button onClick={redirect(MODE.VIEW)} className='viewBtn button'>View</button>
      {' '}
      <button onClick={redirect(MODE.EDIT)} className='editBtn button'>Edit</button>
      {' '}
      <button onClick={redirect(MODE.CLONE)} className='cloneBtn button'>Clone</button>
      {' '}
      <button onClick={redirect(MODE.DELETE)} className='deleteBtn button'>Delete</button>
    </div>
  );
}

export default Actions;
