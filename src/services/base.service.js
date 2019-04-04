import api from '../helpers/api';

class BaseService {
  constructor(props) {
    this.entity = props.entity;
  }

  async index(query) {
    try {
      return await api.call('get', `/${this.entity}`, query);
    } catch (e) {
      return e.response;
    }
  }

  async show(id) {
    try {
      return await api.call('get', `/${this.entity}/${id}`);
    } catch (e) {
      return e.response;
    }
  }

  async create(data) {
    try {
      return await api.call('post', `/${this.entity}`, null, data);
    } catch (e) {
      return e.response;
    }
  }

  async update(id, data) {
    try {
      return await api.call('put', `/${this.entity}/${id}`, null, data);
    } catch (e) {
      return e.response;
    }
  }

  async remove(id) {
    try {
      return await api.call('delete', `/${this.entity}/${id}`);
    } catch (e) {
      return e.response;
    }
  }
}

export default BaseService;
