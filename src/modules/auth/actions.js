import types from './types';

function checkAuth() {
  return {
    type: types.CHECK_AUTH_REQUEST,
    isAuth: false,
  };
}

function login(formdata) {
  return {
    type: types.GET_LOGIN_REQUEST,
    loading: true,
    error: {},
    formdata,
  };
}

function logout() {
  return {
    type: types.GET_LOGOUT_REQUEST,
    loading: false,
    error: {},
  };
}

const actions = {
  checkAuth,
  login,
  logout,
};

export default actions;
