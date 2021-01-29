import axios from './GodInterceptor';


export default class API {
  constructor(name, authControl = true) {
    this.url = 'http://127.0.0.1:8000/api/v1/' + name;
    axios.defaults.withCredentials = true;
  }

  post(payload = {}, query = {}) {
    return axios.post(this.url, payload, { params: query });
  }
}
