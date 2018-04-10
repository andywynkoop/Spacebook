export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const SET_QUERY = 'SET_QUERY';

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openModal = modalType => ({
  type: OPEN_MODAL,
  modalType
});

export const setQuery = query => ({
  type: SET_QUERY,
  query
});
