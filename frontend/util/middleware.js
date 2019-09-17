export const windowState = store => next => action => {
  const state = store.getState();
  window.s = state;
  window.gs = () => window.s = store.getState();
  next(action);
}