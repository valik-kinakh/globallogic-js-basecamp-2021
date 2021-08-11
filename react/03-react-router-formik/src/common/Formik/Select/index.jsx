import { useField, ErrorMessage } from 'formik';
import './styles.scss';

function Select({ name, label, value, disabled = false, validate }) {
  const [field] = useField({ name, validate });
  return (
    <div className='select'>
      <label>
        <div>{label}</div>
        <select disabled={disabled} {...field} className='options'>
          <option />
          {value.map((role, index) => {
            return <option key={index}>{role}</option>;
          })}
        </select>
      </label>

      <ErrorMessage name={name} className='error' component='div' />
    </div>
  );
}

export default Select;