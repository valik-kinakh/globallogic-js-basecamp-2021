import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  getUser,
  fetchRoles,
  createUser,
  updateUser,
  fetchUsers,
  removeUser
} from '../../Store/redux/reducers/userReducer';
import { MODE } from '../../../constants';
import { ID } from '../constants';
import FormContainer from './FormContainer';
import { getInitialValues, getRequestPayload } from './converter';
import { useDispatch, useSelector } from 'react-redux';

function UserForm() {
  const { mode, id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.usersFetched);
  const user = users.find((user) => user.id === Number(id));
  const roles = useSelector((state) => state.users.roles);
  const rolesFetched = useSelector((state) => state.users.rolesFetched);

  useEffect(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT) {
      if (!user) {
        dispatch(getUser(id));
      }
    }
    if (!status) {
      dispatch(fetchUsers());
    }
  }, [id, mode, user, dispatch, status]);

  useEffect(() => {
    if (mode) {
      if (!rolesFetched) {
        dispatch(fetchRoles());
      }
    }
  }, [rolesFetched, dispatch, mode]);

  const handleSubmit = async values => {
    try {
      const payload = getRequestPayload(values);

      switch (mode) {
        case MODE.CREATE:
          await dispatch(createUser(payload));
          break;
        case MODE.EDIT:
          await dispatch(updateUser(payload));
          break;
        case MODE.CLONE:
          await dispatch(createUser(payload));
          break;
        case MODE.DELETE:
          await dispatch(removeUser(payload));
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push('/users');
  };

  const initialValues = getInitialValues(user);

  return (
    <FormContainer
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
      roles={roles}
      required={true}
    />
  );
}

export default UserForm;
