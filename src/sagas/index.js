import { fork, all } from 'redux-saga/effects';
import AuthSaga from '../modules/auth/saga';

function* rootSaga() {
  yield all([fork(AuthSaga)]);
}

export default rootSaga;
