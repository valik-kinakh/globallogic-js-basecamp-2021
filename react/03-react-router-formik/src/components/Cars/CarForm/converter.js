import { INITIAL_STATE } from '../constants';

export const getInitialValues = user => (user ? user : INITIAL_STATE);

export const getRequestPayload = values => values;