const store = {};

const getStore = () => {
  return store.user || null;
};

const setStore = (user) => {
  store.user = user;
};

const removeStore = () => {
  store.user = null;
};

export { store, getStore, setStore, removeStore };

