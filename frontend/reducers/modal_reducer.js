import { CLOSE_MODAL, OPEN_MODAL } from '../actions/ui';
const _nullModal = {
  type: null
};
export default (state = _nullModal, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return _nullModal;
    case OPEN_MODAL:
      const newState = Object.assign({}, state);
      newState.type = action.modalType;
      return newState;
    default:
      return state;
  }
};
