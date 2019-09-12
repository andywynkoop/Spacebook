export const windowState = store => next => action => {
  const state = store.getState();
  window.s = state;
  next(action);
}