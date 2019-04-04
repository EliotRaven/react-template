// import api from '../../helpers/api';

// function checkAuth() {
//   return !!JSON.parse(sessionStorage.getItem('auth-user'));
// }
//
// function getToken() {
//   return JSON.parse(sessionStorage.getItem('session')).token;
// }
//
// function setAuthUserToStorage(user) {
//   sessionStorage.setItem('auth-user', JSON.stringify(user));
// }
//
// function setSessionToStorage(session) {
//   sessionStorage.setItem('session', JSON.stringify(session));
// }
//
// function getAuthUser() {
//   if (!checkAuth) return { error: 'unauthorized' };
//   return JSON.parse(sessionStorage.getItem('auth-user'));
// }
//
// function getAuthHeaders() {
//   return getAuthUser() ? { 'auth-token': `${getToken()}` } : null;
// }
//
// async function signin(credentials) {
//   try {
//     const res = await api.call('post', '/login', null, credentials, true);
//     await setAuthUserToStorage(res.data.user);
//     await setSessionToStorage(res.data.session);
//     return res.data;
//   } catch (e) {
//     return e.response;
//   }
// }
//
// async function logout() {
//   try {
//     await api.call('post', '/logout', null, { token: getToken() }, true);
//     sessionStorage.removeItem('auth-user');
//     sessionStorage.removeItem('session');
//     return false;
//   } catch (e) {
//     return e.response;
//   }
// }

function get() {
  return JSON.parse(sessionStorage.getItem('auth-user'));
}

function set(user) {
  sessionStorage.setItem('auth-user', JSON.stringify(user));
}

function checkAuth() {
  return !!sessionStorage.getItem('auth-user');
}

function setUserToStorage(user) {
  const users = JSON.parse(sessionStorage.getItem('users'));
  users.push(user);

  sessionStorage.setItem('users', JSON.stringify(users));
}

function getUserFromStorage(credentials) {
  if (!sessionStorage.getItem('users')) {
    sessionStorage.setItem('users', JSON.stringify([]));
    return null;
  }
  return JSON
    .parse(sessionStorage.getItem('users'))
    .find(i => i.email === credentials.email);
}

function getAuthUser() {
  if (!checkAuth) return { error: 'unauthorized' };
  return get();
}

function signin(credentials) {
  const user = getUserFromStorage(credentials);
  if (!user) {
    setUserToStorage(credentials);
  }
  if (user && user.password !== credentials.password) return new Error('wrong password');
  set(credentials);

  return getAuthUser();
}

function getToken() {
  return JSON.parse(sessionStorage.getItem('session')).token;
}

function getAuthHeaders() {
  return getAuthUser() ? { 'auth-token': `${getToken()}` } : null;
}

function logout() {
  sessionStorage.removeItem('auth-user');
}

const AuthService = {
  signin,
  checkAuth,
  getAuthUser,
  getAuthHeaders,
  logout,
};

export default AuthService;
