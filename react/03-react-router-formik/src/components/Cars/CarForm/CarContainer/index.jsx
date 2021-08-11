import { Formik, Form } from 'formik';
import Input from '../../../../common/Formik/Input';
import { MODE } from '../../../../constants';
import { MODEL, NAME, GEARBOX } from '../../constants';
import Buttons from './Buttons';
import Select from '../../../../common/Formik/Select';
import './form.scss';

function CarContainer({ initialValues, onSubmit, mode, gearboxes, required }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className={'form'}>
          <Input name={NAME} label='Name' disabled={mode === MODE.VIEW || mode === MODE.DELETE} required={required}
                 validate={value => {
                   if (value.trim() === '') {
                     return `Please, enter cars name:)`;
                   }
                 }}
          />
          <Input name={MODEL} label='Model' disabled={mode === MODE.VIEW || mode === MODE.DELETE} required={required}
                 validate={value => {
                   if (value.trim() === '') {
                     return `Please, enter cars model:)`;
                   }
                 }}
          />
          <Select name={GEARBOX} label='Gearbox' disabled={mode === MODE.VIEW || mode === MODE.DELETE} value={gearboxes}
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

export default CarContainer;