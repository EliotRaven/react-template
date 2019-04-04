import axios from 'axios';
import authService from '../modules/auth/service';

const call = (method, uri, params = null, data = null, auth = false) => {
  const apiUrl = 'localhost/api';
  const authUrl = 'localhost/auth';
  const url = auth ? authUrl : apiUrl;
  const headers = {
    ...authService.getAuthHeaders() || '',
    'Content-Type': 'application/json',
  };
  return axios({
    method,
    url: `${url}${uri}`,
    params,
    headers,
    data,
  });
};

export default call;
