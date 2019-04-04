import types from './types';
import service from './service';

const initialState = {
  loading: false,
  error: {},
  isAuth: false,
  authUser: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_AUTH_REQUEST:
      return {
        ...state,
        isAuth: service.checkAuth(),
        authUser: service.getAuthUser() || null,
      };
    case types.GET_LOGIN_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case types.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        isAuth: !!action.data,
        authUser: service.getAuthUser(),
      };
    case types.GET_LOGIN_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        isAuth: action.isAuth,
      };
    case types.GET_LOGOUT_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case types.GET_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: action.isAuth,
        authUser: action.authUser,
        loading: action.loading,
        error: action.error,
      };
    case types.GET_LOGOUT_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    default:
      return state;
  }
};

export default auth;
