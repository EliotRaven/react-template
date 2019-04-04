import { put, takeEvery } from 'redux-saga/effects';
import types from './types';
import AuthService from './service';

function* login(action) {
  try {
    const data = yield AuthService.signin(action.formdata);
    yield put({
      type: types.GET_LOGIN_SUCCESS,
      data,
      loading: false,
      error: '',
    });
  } catch (error) {
    yield put({
      type: types.GET_LOGIN_FAILURE,
      error: error || 'Something went wrong!',
      loading: false,
    });
  }
}

function* logout() {
  try {
    const isAuth = yield AuthService.logout();
    const authUser = yield AuthService.getAuthUser();
    yield put({
      type: types.GET_LOGOUT_SUCCESS,
      isAuth,
      authUser,
      loading: false,
      error: '',
    });
  } catch (error) {
    yield put({
      type: types.GET_LOGOUT_FAILURE,
      error,
      loading: false,
    });
  }
}

function* AuthSaga() {
  yield takeEvery(types.GET_LOGIN_REQUEST, login);
  yield takeEvery(types.GET_LOGOUT_REQUEST, logout);
}

export default AuthSaga;
