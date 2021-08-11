import { Formik, Form } from 'formik';
import Select from '../../../../common/Formik/Select';
import Input from '../../../../common/Formik/Input';
import { MODE } from '../../../../constants';
import { ROLE, USERNAME, AGE } from '../../constants';
import Buttons from './Buttons';
import './form.scss';

function FormContainer({ initialValues, onSubmit, mode, roles, required }) {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className='form'>
          <Input name={USERNAME} label='Username' disabled={mode === MODE.VIEW} required={required}
                 validate={value => {
                   if (value.trim() === '') {
                     return `Please, enter your name:)`;
                   }
                 }}
          />
          <Input name={AGE} label='Age' disabled={mode === MODE.VIEW} type='number' required={required}
                 validate={value => {
                   if (value <= 15 || value >= 111) {
                     return `Not allowed age!`;
                   }
                 }}
          />
          <Select name={ROLE} label='Role' disabled={mode === MODE.VIEW} value={roles}
                  validate={value => {
                    if (!value) {
                      return `Field is required`;
                    }
                  }}
          />

          <br />

          <Buttons mode={mode} />
        </div>
      </Form>
    </Formik>
  );
}

export default FormContainer;
