import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';
import './buttons.scss';
import { MODE } from '../../../../../constants';

function Buttons({ mode }) {
  const history = useHistory();
  const { isSubmitting } = useFormikContext();

  return (
    <div>
      {(mode === MODE.CREATE || mode === MODE.EDIT) && (
        <button type='submit' disabled={isSubmitting} className='submitBtn'>
          Save
        </button>
      )}
      {
        (mode === MODE.CLONE) && (
          <button type='submit' disabled={isSubmitting} className='submitBtn'>
            Clone
          </button>
        )
      }
      {
        (mode === MODE.DELETE) && (
          <button type='submit' disabled={isSubmitting} className='submitBtn'>
            Delete
          </button>
        )
      }

      <button type='button' onClick={() => history.push('/users')} className='submitBtn'>
        Cancel
      </button>
    </div>
  );
}

export default Buttons;
