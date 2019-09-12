import { RECEIVE_CURRENT_USER } from './session';
import * as API from '../util/photoApiUtil';

export const updatePhoto = (form, id) => dispatch => 
  API.updatePhoto(form, id).then(payload => dispatch({ type: RECEIVE_CURRENT_USER, payload }));