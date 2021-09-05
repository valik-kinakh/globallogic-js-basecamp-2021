import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useContext } from 'react';

import OrderContext from '../../context/orderContext';
import Nav from '../Nav/Nav';
import Quotes from '../Quotes/Quotes';

import './OrderForm.css'

export function OrderDrones({order}){
  const items = {};
  let total = 0;

  order.forEach(dr => {
    total += dr.price;

    if (items[dr.name]) {
      items[dr.name].count = items[dr.name].count + 1;
    } else {
      items[dr.name] = { ...dr, count: 1 };
    }
  });

  return (
    <div className="ordered-drones">
      <ul className="ordered-drones-list">
        {Object.keys(items).map(key => (
          <li key={items[key].id}>
            🚁 {items[key].name}
            <span className="count">{`${items[key].price} UAH (${items[key].count})`}</span>
          </li>
        ))}
      </ul>
      <p>Total: {total}UAH</p>
    </div>
  );
}

export default function OrderForm(){
  const { order } = useContext(OrderContext);

  return (
    <div className="order-form">
      <Nav />
      <h1>Your Order</h1>
      {order.length >= 1 && <OrderDrones order={order} />}
      <Formik
        initialValues={{ email: '', address: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          const endpoint = 'http://localhost:8080/api/orders';
          fetch(endpoint, {
            method: "POST",
            body: JSON.stringify({ email: values.email, address: values.address, order })
          });

          setSubmitting(false);

        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field type="address" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
